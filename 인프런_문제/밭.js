let sample = [];

let first = [
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1]
];

let second = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 3],
  [0, 0, 0, 0, 4],
  [0, 2, 0, 0, 2],
  [4, 5, 0, 2, 0]
];

// 0으로 초기화된 Array를 만든다.(first와 second과 같은 사이)
for (let i = 0; i < first.length; i++) {
  sample[i] = new Array(first[0].length);
}

// 90도 방향을 바꿀 second 순회
for (let i = 0; i < second.length; i++) {
  for (let j = 0; j < second[0].length; j++) {
    // [i][j]는 순차적으로 새로운 배열이 들어갈 곳
    sample[i][j] = second[j][second[0].length - 1 - i];
    // [1,3,4,2,0][4]을 시작으로 [0,0,0,0,2][3] ... [0,0,0,0,4][0]
    sample[i][j] += first[i][j]; // first, second 의 합.
  }
}
// console.log(sample);

let result = "";
for (let ele of sample) {
  result += String.fromCharCode(parseInt(ele.join(""), 8));
}
console.log(result);
// 8진수를 10진수 변환한 뒤에 ascii로 변환한다.

// 방향을 오른쪽으로 90도
for (let i = 0; i < second.length; i++) {
  for (let j = 0; j < second[0].length; j++) {
    sample[i][j] = second[second[0].length - 1 - j][i];
  }
}
