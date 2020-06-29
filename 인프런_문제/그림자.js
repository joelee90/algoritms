graph = {
  100: new Set([67, 66]),
  67: new Set([100, 82, 63]),
  66: new Set([100, 73, 69]),
  82: new Set([67, 61, 79]),
  63: new Set([67]),
  73: new Set([66]),
  69: new Set([66, 65, 81]),
  61: new Set([82]),
  79: new Set([82, 87, 77]),
  65: new Set([69, 84, 99]),
  81: new Set([69]),
  87: new Set([79, 31, 78]),
  77: new Set([79]),
  84: new Set([65]),
  99: new Set([65]),
  31: new Set([87]),
  78: new Set([87])
};

function DFS(graph, start) {
  let 방문 = []; //탐색하면서 방문한 노드들을 기록
  let stack = [start];

  while (stack) {
    //스택이 끝날때까지
    let n = 0; // 다음 방문 할 노드
    n = stack.pop(); //스택 맨 뒤에서 제거
    if (!방문.includes(n)) {
      //n을 방문이 포함하고 있지 않는다면
      방문.push(n); //방문에 n을 push
    }
    let 차집합 = new Set([...graph[n]].filter(x => !new Set(방문).has(x)));
    //방문된 값과 graph[n]의 차집합
    for (let v of 차집합) {
      stack.push(v);
    }
    if (stack.length == 0) {
      break;
    }
  }
  return 방문;
}
console.log(DFS(graph, 100));

// 최대값 구하기
function 최댓값(graph, start) {
  let 방문 = [];
  let stack = [start];

  while (stack) {
    let n = 0;
    n = stack.pop();
    if (!방문.includes(n)) {
      방문.push(n);
    }
    let 차집합 = new Set([...graph[n]].filter(x => !new Set(방문).has(x)));
    if (차집합.size == 0) {
      break;
    }
    stack.push(Math.max(...차집합));
    if (stack.length == 0) {
      break;
    }
  }
  return 방문;
}
console.log(최댓값(graph, 100));

// 최소값 구하기
function 최소값(graph, start) {
  let 방문 = [];
  let stack = [start];

  while (stack) {
    let n = 0;
    n = stack.pop();
    if (!방문.includes(n)) {
      방문.push(n);
    }
    let 차집합 = new Set([...graph[n]].filter(x => !new Set(방문).has(x)));
    if (차집합.size == 0) {
      break;
    }
    stack.push(Math.min(...차집합));
    if (stack.length == 0) {
      break;
    }
  }
  return 방문;
}
console.log(최소값(graph, 100));
