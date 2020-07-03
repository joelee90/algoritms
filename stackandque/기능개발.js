let progresses = [93, 30, 55];
let speeds = [1, 30, 5];

function solution(progresses, speeds) {
  let answer = [];
  while (progresses.length > 0) {
    progresses = progresses.map((v, i) => v + speeds[i]);
    // progresses 배열의 각 value에 speeds value 만큼 더해준다.(동시에 증가)
    let count = 0; // 배포 카운트
    while (progresses[0] >= 100) { // progresses의 맨 앞 p[0]의 값이 100과 같거나 크면
      progresses.shift(); // 배열에서 제거한다
      speeds.shift(); // 스피드에서도 동시에 제거
      count++; //100이 되었으므로 개발이 된것이기 때문에 카운트한다.
    }

    if (count > 0) {
      answer.push(count);
    }
  }
  return answer;
}

solution(progresses, speeds);

// 실행되는 과정을 풀이
progresses [ 94, 60, 60 ]  // 스피드 값 만큼 progresses 값이 증가한다.
count 0
progresses [ 95, 90, 65 ]
count 0
progresses [ 96, 120, 70 ]
count 0
progresses [ 97, 150, 75 ]
count 0
progresses [ 98, 180, 80 ]
count 0
progresses [ 99, 210, 85 ]
count 0
progresses [ 100, 240, 90 ]  // p[0]이 100이 되었고, p[1]도 100이 넘어서 count = 2
count 2
progresses [ 95 ]
count 0
progresses [ 100 ]
count 1

배열의 value를 스피드 value 만큼 동시에 증가.
배열의 맨 앞 p[0]의 value가 100이랑 같거나 보다 크면 배열에서 제거한다.
배포되는지 몇일이 걸리는지 계산할 필요는 없었다.
