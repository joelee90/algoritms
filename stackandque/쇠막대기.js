//프로그래머스 쇠막대기 스택/큐

let arrangement = '()(((()())(())()))(())';

function solution(arrangement) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < arrangement.length; i++) {
    if (arrangement[i] === '(') {
      // 여는 괄호는 스택에 넣기
      stack.push(arrangement[i]);
    } else {
      // arrangement[i] === ')' 닫는 괄호일 경우 2가지 가능성
      stack.pop();
      if (arrangement[i - 1] === '(') {
        // [괄호가 닫힌경우] 1.레이저
        answer += stack.length; // 스택의 길이를 저장
      } else {
        // arrangement[i - 1] === ')' 2.막대기 [닫히면서 막대기 close]
        answer += 1;
      }
    }
  }
}
solution(arrangement);
