function solution2(str) {
    let answer = 0;
    for (let c of str) {
        // 숫자인 경우에만 answer에 추가
        if (c >= '0' && c <= '9') {
            answer = answer * 10 + Number(c); // 숫자로 누산
            // Number(c)는 문자 하나를 숫자로 변환하는 함수
        }
    }
    return answer;
}

str = 'g0en2T0s8eSoft';
console.log(solution2(str)); // 208