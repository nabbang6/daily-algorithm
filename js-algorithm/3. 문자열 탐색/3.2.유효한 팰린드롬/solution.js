function solution(str) {
    // 유효한 팰린드롬인지 확인
    let answer = ['YES', 'NO'];
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    // 문자열을 뒤집어서 원래 문자열과 비교
    if (str === str.split('').reverse().join('')) {
        return answer[0];
    } else {
        return answer[1];
    }
}

str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str)); // YES

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 문자열을 소문자로 변환 후 알파벳 외 문자를 제거하고, 뒤집은 문자열과 비교
- 시간 복잡도: O(n) — toLowerCase, replace, reverse, join, 문자열 비교 모두 O(n)
- 공간 복잡도: O(n) — 정제된 문자열과 뒤집힌 문자열을 별도로 저장
- 잘된 점: 정규식 `/[^a-z]/g`로 전처리를 한 줄에 깔끔하게 처리했고, 코드가 직관적으로 읽힘
- 개선 가능한 점: split → reverse → join 과정에서 중간 배열을 생성하므로 메모리를 추가 사용함

[개선된 풀이]
- 개선 아이디어: 투 포인터(two-pointer)로 양끝에서 안쪽으로 좁혀오며 비교
  - 뒤집힌 문자열을 별도 생성하지 않아 공간을 아낄 수 있음
  - 불일치 문자를 발견하는 즉시 조기 종료되어 평균 성능이 향상됨

function solution(str) {
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return 'NO';
        left++;
        right--;
    }
    return 'YES';
}

[핵심 개념]
- 유효한 팰린드롬(Valid Palindrome): 특정 조건(알파벳만, 대소문자 무시)을 적용한 후 회문 여부를 판단하는 변형 문제
- 문자열 전처리: 정규식으로 불필요한 문자를 제거한 뒤 알고리즘 적용
- 투 포인터: 양끝에서 중앙으로 좁혀오는 방식으로 O(n/2) 비교 횟수를 달성하고 조기 종료 가능
===== */