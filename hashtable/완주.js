let p = ["marina", "josipa", "nikola", "vinko", "filipa"];
let c = ["marina", "josipa", "nikola", "filipa"];

function solution(p, c) {
    p = p.sort();
    c = c.sort();
    // console.log(p, c);

    for(let i in p) {
        if(p[i] !== c[i])
        return p[i];
    }
    // console.log(p[i])
}

solution(p, c);

function solution(p, c) {
  let hashMap = new Map();
  for (const persons of c) {
    // console.log("persons", persons);
    const mapItem = hashMap.get(persons);
    hashMap.set(persons, mapItem ? mapItem + 1 : 1);
  }
  // console.log("hashMap", hashMap);
  for (const persons of p) {
    const mapItem = hashMap.get(persons);
    // console.log("mapItem", mapItem);
    if (!mapItem) {
      // console.log("persons", persons);
      return persons;
    } else {
      hashMap.set(persons, mapItem - 1);
    }
  }
}

완주하지 못한 선수

1.경기를 완주한 사람들 'complete list' 를 new Map()을 사용하여 value 1을 주고 hash table에 저장한다.

    `const mapItem = hashMap.get(persons)`
        hash table 에 저장된 list를 get 한다.

    `hashMap.set(persons, mapItem ? mapItem + 1 : 1);`
        value 1을 주고 hash table에 저장

2. 참가자 loop 에서 mapItem 을 불러온다 그리고 참가자가 mapItem 에 없으면
    (키가 없거나 저장된 값이 0이면) 반환 return 한다.
    참가자가 존재하면 value -1을 주고 값은 뺀다.
