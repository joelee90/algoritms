// 1st solution
let priorities = [1, 1, 9, 1, 1, 1];
let location = 0;

function solution(priorities, location) {
  let answer = 0;
  let newArr = [];
  let list = priorities.map((v, i) => ({ v, i }));
  while (true) {
    let current = list.shift();
    if (list.some(i => i.v > current.v)) {
      list.push(current);
    } else {
      answer++;
      if (current.i === location) {
        return answer;
      }
    }
  }
}
solution(priorities, location);

// 2nd solution
let priorities = [1, 1, 9, 1, 1, 1];
let location = 0;

function solution(priorities, location) {
  let answer = 0;
  let newArr = []; // 중요한 순서대로 나열되는 새로운 배열 생성
  let list = priorities.map((v, i) => ({ v, i }));
  while (list.length) {
    let current = list.shift();
    if (list.some(i => i.v > current.v)) {
      list.push(current);
    } else {
      newArr.push(current); // 새로운 배열은 중요도 순서대로 나열됨
    }
  }
  return newArr.findIndex(ele => ele.i === location) + 1;
  // location에 해당되는 위치의 ele의 index를 1을 더해서 반환한다.
}
solution(priorities, location);

//1st solution 보다 2nd solution이 더 이해하기 명화하고 straightforward.
