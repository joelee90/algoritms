let heights = [3,9,9,3,5,7,2];

--- 1st solution ---
function solution(heights) {
    let answer = [];
    for(let i = heights.length - 1; i >= 0; i--) {
        for(let j = i; j >= 0; j--) {
            if(heights[j] > heights[i]) {
                answer.push(j+1);
                break;
            }
            if(j === 0) {
                answer.push(0);
            }
        }
    }
    return answer.reverse();
}

solution(heights);

1st solution - logical order

1. Reverse loop the array. (start from the end)
2. Nested loop to compare the elements to its next elements.
3. Conditions :
    a. heights[j] > heights[i] => then save its idx + 1; break;
    b. j === 0 : j here is the idx, which means it has reached the end for comparison.

--- 2nd solution ---

function solution(heights) {
    heights.map((value, idx) => {
        while(idx) {
            idx--;
            if(heights[idx] > value) {
                return idx + 1;
            }
        }
        return 0;
    });
}
