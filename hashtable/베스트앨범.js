let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
  let genreMap = new Map();
  let playMap = new Map();
  let map = new Map();

  for (const [idx, items] of genres.entries()) {
    // console.log(idx, items);
    genreMap.set(idx, genres[idx]);
    playMap.set(idx, plays[idx]);

    map.set(genres[idx], plays[idx]);

    // console.log(genres[idx]);
    // console.log(plays[idx]);
    // console.log("mapItem", mapItem);
    // console.log("map", map);

    // if (map.has(genres[idx])) {
    //   map.set(genres[idx], map.get(genres[idx] + plays[idx]));
    // } else {
    //   map.set(genres[idx], plays[idx]);
    // }
  }

  let best = [];
  while (map.size) {
    let max = 0;
    let key;
    for (let [k, v] of map) {
      // console.log("k", k);
      // console.log("v", v);
      if (max < v) {
        max = v;
        key = k;
      }
    }
    best.push(key);
    map.delete(key);
  }
  // console.log("best", best);

  for (let i = 0; i < best.length; i++) {
    let t = [];
    for (let [key, value] of genreMap) {
      if (value === best[i]) {
        t.push(playMap.get(key));
      }
    }
    // console.log("t", t);
    t.sort((a, b) => b - a);

    if (t.length > 2) {
      t = t.slice(0, 2);
    }

    for (let j = 0; j < t.length; j++) {}
  }

  // console.log("genreMap", genreMap);
  // console.log("playMap", playMap);

  // let size = genres.length;
  // for (let i = 0; i < size; i++) {
  //   console.log(i, genres[i]);
  // }

  // for (const [idx, items] of plays.entries()) {
  //   playMap.set(idx, plays[idx]);
  // }
  // console.log("playMap", playMap);

  var answer = [];
  return answer;
}

solution(genres, plays);

// 둘다 idx 같으니, 같은것 끼리 페어
