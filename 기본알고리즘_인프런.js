// 기본 알고리즘 강좌
// 재귀함수1 : 반복문을 이용한 1부터까지 100까지 합과 곱
let s = 0;
for(let i = 1; i < 101; i++) {
    s += i;
}
console.log(s);

//--------------------------------------------

let n = 100;
console.log(n*(n+1)/2);

//--------------------------------------------

let m = 1;
for(let j = 1; j < 6; j++) {
    m *= j;
}
console.log(m);

// 재귀함수2 : 재귀함수를 이용한 1부터까지 100까지 합과 곱
function fibo(n) {
    if(n <= 1) {
        return 1;
    }
    return n + fibo(n-1);
}
console.log(`재귀는 ${fibo(100)}`);

// 재귀함수3 : 2진수의 변환
11 % 2 = 5 나머지 1
5 % 2 = 2  나머지 1
2 % 2 = 1  나머지 0
1
밑에서 위로 하면 1011, 11을 이진법으로 표현하면 1011.

let result = '';
let x = 11;
while(true) {
    if(x % 2 === 1) {
        result += 1;
    } else {
        result += 0;
    }
    x = Math.floor(x / 2)
    if(x === 1 || x === 0) {
        result += String(x);
        break;
    }
}
console.log(result.split('').reverse().join(''));

//--------------------------------------------

function binary(n) {
    if(n === 1 || n === 0) {
        return String(n);
    }
    return binary(Math.floor(n / 2)) + String(n % 2);
}
console.log(binary(11));

// 재귀함수4: 문자열 뒤집기
let result = "";
let x = "leehojun";
while (true) {
  if (x.length == 1) {
    result += x;
    break;
  }
  let y = x.split("");
  console.log("y", y);
  result += String(y.pop());
  x = y.join("");
  console.log("x", x);
}
console.log(result);

// 재귀로 문자열 뒤집기
str = "leehojun";
function Reverse(str) {
  if (str.length == 1) {
    return str;
  }
  return str[str.length - 1] + Reverse(str.slice(0, str.length - 1));
}
console.log(Reverse(str));

// 재귀함수5: 각 자릿수의 합
let result = 0;
let x = "123123";
while (true) {
  if (x.length == 1) {
    result += parseInt(x, 10);
    break;
  }
  let y = x.split("");
  result += parseInt(y.pop(), 10);
  x = y.join("");
}
console.log(result);

// 재귀함수로 각 자릿수의 합
let str = "123123";
function Sum(str) {
  if (str.length == 1) {
    return parseInt(str, 10);
  }
  return parseInt(str[str.length - 1], 10) + Sum(str.slice(0, str.length - 1));
}
console.log(Sum(str));

// 최솟값과 최댓값 구하기
a = [10, 20, 30, 40, 1, 2, 3];
let m = 0;
for (let num of a) {
  if (num > m) {
    m = num;
  }
}
console.log(m);

// 선택정렬
let a = [10, 11, 9, 2, 3, 6, 5, 4];
let newArr = [];
while (a.length) {
  newArr.push(Math.min.apply(null, a));
  a.splice(a.indexOf(Math.min.apply(null, a)), 1);
  console.log("a", a);
}
console.log("newArr", newArr);

// 삽입정렬
let 배열 = [5, 10, 66, 77, 54, 32, 11, 15];
let 정렬배열 = [];
let 길이 = 배열.length;

for (let i = 0; i < 길이; i++) {
  삽입값 = 배열.shift();
  인덱스 = 삽입값들어갈인덱스(정렬배열, 삽입값);
  정렬배열.splice(인덱스, 0, 삽입값);
}
function 삽입값들어갈인덱스(정렬배열, 삽입값) {
  for (let i in 정렬배열) {
    if (삽입값 < 정렬배열[i]) {
      return i;
    }
  }
  return 정렬배열.length;
}
console.log("정렬배열", 정렬배열);

// 다시 정리한
let arr = [5, 10, 66, 77, 54, 32, 11, 15];
let sortedArr = [];
let size = arr.length;

for(let i = 0; i < size; i++) {
    insert = arr.shift();
    index = findIndex(sortedArr, insert);
    sortedArr.splice(index, 0, insert);

}
function findIndex(sortedArr, insert) {
    for(let i in sortedArr) {
        if(insert < sortedArr[i]) {
            return i;
        }
    }
    return sortedArr.length;
}
console.log(sortedArr);

// 병합정렬(분할, 정복)
let arr = [5, 10, 66, 77, 54, 32, 11, 15];
function Merge(arr) {
  let result = [];
  let size = arr.length;
  if (size <= 1) {
    return arr;
  }
  let mid = parseInt(size / 2);
  let groupOne = Merge(arr.slice(0, mid));
  let groupTwo = Merge(arr.slice(mid));

  while (groupOne.length != 0 && groupTwo.length != 0) {
    if (groupOne[0] < groupTwo[0]) {
      result.push(groupOne.shift());
    } else {
      result.push(groupTwo.shift());
    }
  }

  while (groupOne.length != 0) {
    result.push(groupOne.shift());
  }

  while (groupTwo.length != 0) {
    result.push(groupTwo.shift());
  }
  return result;
}
console.log(Merge(arr));

//퀴정렬 : 피봇(기준점)
//원소가 하나일때는 재귀를 실행하지 않는다.

let arr = [66, 77, 54, 32, 10, 5, 11, 15];

function quick(arr) {
    let size = arr.length;
    if(size <= 1) {
        return arr;
    }

    let pivot = [arr.shift()];
    let groupOne = [];
    let groupTwo = [];

    for(let i in arr) {
        if(arr[i] < pivot) {
            groupOne.push(arr[i]);
        } else {
            groupTwo.push(arr[i]);
        }
    }
    console.log(`groupOne: ${groupOne}\n groupTwo: ${groupTwo}\n pivot: ${pivot}`);
    return quick(groupOne).concat(pivot, quick(groupTwo))
}
console.log(quick(arr));

// 다시정리
let size = arr.length;

function quick(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let pivot = [arr.shift()];
    let left = [];
    let right = [];
    for(let i of arr) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            push.push(arr[i]);
        }
    }
    return quick(left).concat(pivot, quick(right));
}
