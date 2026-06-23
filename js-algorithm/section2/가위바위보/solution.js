function solution(s, arr1, arr2) {
    let answer = [];
    // 1: 가위, 2: 바위, 3: 보
    for (let i = 0; i < s; i++) {
        if (arr1[i] === arr2[i]) {
            answer.push('D');
        } else if ((arr1[i] === 1 && arr2[i] === 3) || (arr1[i] === 2 && arr2[i] === 1) || (arr1[i] === 3 && arr2[i] === 2)) {
            answer.push('A');
        } else {
            answer.push('B');
        }
    }
    return answer;
}

let a = [2, 3, 3, 1, 3]
let b = [1, 1, 2, 2, 3]
console.log(solution(5, a, b));

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 각 라운드마다 두 플레이어의 선택을 직접 비교하여 승/패/무를 판별
- 시간 복잡도: O(n) — 라운드 수만큼 순회
- 공간 복잡도: O(n) — 결과 배열 저장

- 잘된 점: A 승리 조건 3가지를 명시적으로 나열하여 가독성이 높음

[개선된 풀이]
- 인덱스 버그 수정 + 모듈러 연산으로 A 승리 조건을 수식 하나로 단순화
- (arr1[i] - arr2[i] + 3) % 3 의 결과로 승패 판별 가능
  - 0: 무승부 (D)
  - 1: A 승리 (A)
  - 2: B 승리 (B)
- 검증: 가위(1) vs 보(3) → (1-3+3)%3 = 1%3 = 1 → A 승리 ✓
         바위(2) vs 가위(1) → (2-1+3)%3 = 4%3 = 1 → A 승리 ✓
         보(3) vs 바위(2) → (3-2+3)%3 = 4%3 = 1 → A 승리 ✓

function solution2(s, arr1, arr2) {
    const result = ['D', 'A', 'B'];
    return Array.from({ length: s }, (_, i) => {
        return result[(arr1[i] - arr2[i] + 3) % 3];
    });
}

[핵심 개념]
- 순환 구조(Rock→Paper→Scissors→Rock)는 모듈러 연산(%)으로 수학적으로 표현 가능
- 이런 패턴은 가위바위보 외에도 순환 비교가 필요한 문제에 활용 가능

===== */