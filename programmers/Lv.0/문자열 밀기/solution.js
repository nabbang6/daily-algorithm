function solution(A, B) {
    var answer = 0;
    if (A === B) return 0;
    for (let i = 0; i < A.length; i++) {
        A = A[A.length - 1] + A.slice(0, A.length - 1);
        answer++;
        if (A === B) return answer;
    }

    return -1;
}

console.log(solution("hello", "ohell")); // 1