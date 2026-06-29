function solution(str) {
    let answer = ['YES', 'NO'];
    // 문자열을 소문자로 변환
    str = str.toLowerCase();

    // 문자열을 배열로 나누고, 뒤집은 후 다시 문자열로 합침
    let reversed = str.split('').reverse().join('');

    // 원래 문자열과 뒤집힌 문자열이 같은지 비교
    return str === reversed ? answer[0] : answer[1];
}

let str = 'gooG';
console.log(solution(str)); // YES

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 문자열을 소문자로 통일한 뒤, 뒤집은 문자열과 비교하는 방식
- 시간 복잡도: O(n) — split/reverse/join 모두 O(n)
- 공간 복잡도: O(n) — 뒤집힌 문자열 배열을 별도로 생성

- 잘된 점: split → reverse → join 체이닝으로 간결하게 역순 문자열을 만든 아이디어가 좋습니다.

[개선된 풀이 1 - 단순화]
- answer 배열 없이 삼항 연산자에서 직접 문자열을 반환하면 더 명확합니다.

function solution(str) {
    str = str.toLowerCase();
    const reversed = str.split('').reverse().join('');
    return str === reversed ? "YES" : "NO";
}

[개선된 풀이 2 - 투 포인터]
- 배열을 새로 만들지 않고, 양 끝 포인터를 중앙으로 좁혀가며 비교합니다.
- 공간 복잡도가 O(1)로 줄어드는 장점이 있습니다.

function solution(str) {
    str = str.toLowerCase();
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return "NO";
        left++;
        right--;
    }
    return "YES";
}

[핵심 개념]
- 회문(Palindrome) 판별: 문자열 역순 비교 vs 투 포인터 두 가지 접근 모두 알아두면 유용합니다.
- String.prototype 메서드 체이닝: split → reverse → join 패턴은 JS에서 배열 역순을 얻는 관용적인 방법입니다.
- 대소문자 무시: toLowerCase() / toUpperCase()로 먼저 정규화한 뒤 비교하는 습관을 기릅니다.
===== */