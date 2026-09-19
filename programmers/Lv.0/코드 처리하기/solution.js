function solution(code) {
    var answer = '';
    let mode = 0;

    for (let i = 0; i < code.length; i++) {
        if (code[i] === '1') {
            mode = 1 - mode;
        } else if (
            (mode === 0 && i % 2 === 0) ||
            (mode === 1 && i % 2 === 1)
        ) {
            answer += code[i];
        }
    }

    // 최종적으로 answer가 빈 문자열이면 "EMPTY" 반환
    return answer === '' ? 'EMPTY' : answer;
}

console.log(solution("abc1abc1abc")); // "acbac"