// 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 < 100, 홀수가 한 개 이상 존재함
// 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최솟값을 출력 

function findOdd(arr) {
    let oddArr = [], min = Number.MAX_SAFE_INTEGER, sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
            oddArr.push(arr[i]);
        };
    };

    console.log(oddArr);

    for (let j = 0; j < oddArr.length; j++) {
        if (min > oddArr[j]) min = oddArr[j];
    }

    console.log("합은 ", sum, ", 최솟값은 ", min);
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(findOdd(arr));

// 해설지 답안

function solution(arr) {
    let answer = [];
    let sum = 0, min = Number.MAX_SAFE_INTEGER;
    for (let x of arr) {
        if (x % 2 === 1) { // 홀수 
            sum += x;
            if (x < min) min = x;
        }
    }
    answer.push(sum);
    answer.push(min);

    return answer;
}