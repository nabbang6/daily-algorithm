function solution2(str) {
    // 유효한 팰린드롬인지 확인
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    let left = 0, right = str.length - 1;
    // 투 포인터로 양끝에서 안쪽으로 좁혀오며 비교
    while (left < right) {
        if (str[left] === str[right]) { // 일치하면 포인터 이동
            left++;
            right--;
        } else {
            return 'NO'; // 불일치하면 즉시 종료
        }
    }
    return 'YES';  // 모든 문자가 일치하면 YES 반환
}

str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution2(str)); // YES

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 소문자 변환 후 알파벳 외 문자 제거, 투 포인터로 양끝에서 중앙으로 좁혀오며 비교
- 시간 복잡도: O(n) — 전처리 O(n) + 포인터 비교 O(n/2)
- 공간 복잡도: O(n) — 정제된 문자열을 새 문자열로 저장
- 잘된 점: 불일치 즉시 조기 종료되어 불필요한 비교를 피하고, 뒤집힌 문자열을 별도로 생성하지 않아 solution.js 대비 공간을 아낌
- 개선 가능한 점: replace()로 전처리 시 새 문자열이 생성되어 O(n) 공간은 피할 수 없음. 이를 없애려면 원본 문자열에서 포인터가 알파벳이 아닌 문자를 직접 건너뛰는 방식을 사용

[개선된 풀이]
- 개선 아이디어: 전처리(replace) 없이 원본 문자열에서 포인터가 알파벳이 아닌 문자를 스킵하며 비교
  - 정제된 새 문자열을 생성하지 않아 공간 복잡도를 O(1)로 줄일 수 있음

function solution2(str) {
    str = str.toLowerCase();
    let left = 0, right = str.length - 1;
    const isAlpha = c => c >= 'a' && c <= 'z';

    while (left < right) {
        while (left < right && !isAlpha(str[left])) left++;
        while (left < right && !isAlpha(str[right])) right--;
        if (str[left] !== str[right]) return 'NO';
        left++;
        right--;
    }
    return 'YES';
}

[핵심 개념]
- 유효한 팰린드롬(Valid Palindrome): 특정 조건(알파벳만, 대소문자 무시)을 적용한 후 회문 여부를 판단하는 변형 문제
- 투 포인터(Two Pointer): 배열/문자열의 양끝에 포인터를 두고 중앙으로 좁혀오며 O(n) 탐색으로 해결
- 조기 종료(Early Exit): 불일치 발견 즉시 반환해 불필요한 비교를 제거하고 평균 성능 향상
===== */