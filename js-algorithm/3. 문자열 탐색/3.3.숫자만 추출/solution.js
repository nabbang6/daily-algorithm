function solution(str) {
    str = str.replace(/[^0-9]/g, ''); // 숫자만 추출
    return parseInt(str, 10); // 문자열을 정수로 변환하여 반환
}

str = 'g0en2T0s8eSoft';
console.log(solution(str)); // 208

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 정규식 `/[^0-9]/g`로 숫자가 아닌 문자를 모두 제거한 뒤, `parseInt`로 앞의 0을 제거하며 정수로 변환
- 시간 복잡도: O(n) — replace와 parseInt 모두 문자열 길이에 비례
- 공간 복잡도: O(n) — replace가 숫자만 남긴 새 문자열을 생성
- 잘된 점: 정규식 한 줄로 전처리를 깔끔하게 처리하고, `parseInt`가 앞의 0(leading zero)을 자동으로 제거해줌
- 개선 가능한 점: 중간에 새 문자열을 생성하므로 O(n) 공간이 소비됨

[개선된 풀이]
- 개선 아이디어: 문자열을 순회하며 숫자 문자를 직접 누산 — 새 문자열 생성 없이 O(1) 공간으로 해결

function solution(str) {
    let answer = 0;
    for (let c of str) {
        if (c >= '0' && c <= '9') answer = answer * 10 + Number(c); 
    }
    return answer;
}

[핵심 개념]
- 문자열 전처리: 정규식으로 필요한 문자만 걸러내는 패턴
- leading zero 제거: `parseInt` 또는 숫자 누산 방식 모두 앞의 0을 자동으로 처리
- 문자 → 숫자 변환: `Number(c)` 또는 `c - '0'`으로 문자 하나를 숫자로 변환 후 `answer * 10 + digit` 패턴으로 자릿수 누산
===== */