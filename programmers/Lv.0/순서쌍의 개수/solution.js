function solution(n) {
    // 순서쌍 개수 구하기 O(n)
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n === i * i) {
            answer += 1;
        } else if (n % i === 0) {
            answer++;
        }
    }
    return answer;
}

console.log(solution(20)); //6 
console.log(solution(100)); //9