function solution(bridge_length, weight, truck_weights) {
  let crossing = [];
  let crossed = [];
  let count = 0;

  for (let i = 0; i < truck_weights.length; i++) {
    if (truck_weights[i] < weight) {
      crossing.push(truck_weights[i]);
      count + 1;
      let sum = crossing.reduce((a, b) => a + b);
      if (sum > weight) {
        crossing.pop();
      }
    }
    console.log(crossing);
    console.log(count);
    //if sum of crossing is greater than weight, remove the last added
  }
}

solution(2, 10, [7, 4, 5, 6]);

// var answer = 0;
// return answer;

// 1.Loop through the truck and compare it to the weight of the bridge.
// 2. if the truck weight is less than the weight of the bridge, than put
// the truck on crossing.
// 3. if the sum of the crossing is greater than the weight of the bridge,
// remove the last element from crossing.
// 4. Move the truck from crossing to crossed.
// 5. **count the time it took ? the lenght of the bridge**

class Trucks {
  constructor() {
    this.crossing = {};
    this.count = 0;
  }

  enque(element) {}
}
