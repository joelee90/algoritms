const clothes = [
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"]
];

function solution(clothes) {
  const hashClothes = new Map();
  for (const items of clothes) {
    // console.log("items", items);
    let key = items[1];
    // console.log("key", key);
    const mapItem = hashClothes.get(key);
    // console.log("mapItem", mapItem);
    hashClothes.set(key, mapItem ? mapItem + 1 : 1);
  }
  var answer = 1;
  for (const value of hashClothes.values()) {
    answer *= value + 1;
  }
  return answer - 1;
}
solution(clothes);

// if (!hashClothes.get(key)) {
//   hashClothes.set(key, 1);
// } else {
//   hashClothes.set(key, hashClothes.get(key) + 1);
// }
