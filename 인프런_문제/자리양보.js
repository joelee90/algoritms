//문제4 : 자리를 양보해가며

let page = [
  "척추동물",
  "어류",
  "척추동물",
  "무척추동물",
  "파충류",
  "척추동물",
  "어류",
  "파충류"
];
let 자리 = 3;

function Change(page, 자리) {
  let 의자 = [];
  let hit = 0;

  for (let 개별 of page) {
    // page를 순회해서 개별동물에 접근한다.
    if (의자.length < 3) {
      // 의자 공간이 3이하일 경우
      if (의자.includes(개별)) {
        // 의자에 개별 동물이 존재하는지?
        의자.splice(의자.indexOf(개별), 1); //기존에 앉아있던 개별동물을 제거한다.
        의자.push(개별); // hit된 개별동물을 맨 뒤로 보내준다.
        hit += 1;
      } else {
        // 의자에 개별 동물이 없는경우
        의자.push(개별);
        hit += 60;
      }
    } else {
      // 의자 공간이 3이상일 경우
      if (의자.includes(개별)) {
        // 의자에 개별 동물이 존재하는지?
        의자.splice(의자.indexOf(개별), 1); //기존에 앉아있던 개별동물을 제거한다.
        의자.push(개별); // hit된 개별동물을 맨 뒤로 보내준다.
        hit += 1;
      } else {
        // 개별 동물 없는경우
        의자.shift(); // 맨앞에 있는 동물은 제거한다.
        의자.push(개별);
        hit += 60;
      }
    }
  }
  console.log(`분 ${parseInt(hit / 60)} 초 ${parseInt(hit % 60)}`);
  return hit;
}

Change(page, 자리);

// hit가 된 동물은 맨 뒤로 밀어주기 떄문에, 최근 hit가 된적이 없는 동물을 맨 앞으로 간다.
// 의자 =[]에서 맨앞(idx[0])는 가장최근 hit 된적이 없는 data 라고 정의.
// hit 된 동물이 여러개일 경우, 중간 또는 마지막에 있을수도 있기 때문에,
// 해달 개별동물의 idx를 찾고 제거한다. 의자.splice(의자.indexOf(개별), 1)
