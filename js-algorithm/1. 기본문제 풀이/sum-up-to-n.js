// 1부터 N까지의 수의 합 구하기 

function calculateSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    };
    console.log("1부터 ", num, "까지의 합은 ", sum);
}

calculateSum(6);

// 해설지 답안
function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer = answer + i;
    }

    return answer;
}
