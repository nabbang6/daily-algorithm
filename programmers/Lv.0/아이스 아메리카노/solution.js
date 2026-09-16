function solution(money) {
    var answer = [];
    answer.push(parseInt(money / 5500));
    answer.push(money % 5500);
    return answer;
}

console.log(solution(5500)); // [1, 0]
console.log(solution(15000)); // [2, 4000]