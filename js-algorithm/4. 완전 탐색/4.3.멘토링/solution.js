function isMentor(test, i, j) {
    const m = test.length;    // 테스트 수
    const n = test[0].length; // 학생 수

    for (let k = 0; k < m; k++) { // 각 테스트 순회
        let pi = -1, pj = -1;
        for (let s = 0; s < n; s++) { // 각 순위 위치 탐색
            if (test[k][s] === i) pi = s; // 테스트 k에서 i의 순위
            if (test[k][s] === j) pj = s; // 테스트 k에서 j의 순위
        }
        if (pi >= pj) return false; // 하나라도 i가 j보다 뒤면 멘토 불가
    }
    return true;
}

function solution(test) {
    const m = test.length;    // 테스트 수 (행)
    const n = test[0].length; // 학생 수 (열)
    let answer = 0;

    for (let i = 1; i <= n; i++) {     // 멘토 후보 (학생 번호 1~N)
        for (let j = 1; j <= n; j++) { // 멘티 후보 (학생 번호 1~N)
            if (i !== j && isMentor(test, i, j)) answer++;
        }
    }
    return answer;
}

let test = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 2, 4]];
console.log(solution(test)); // 3

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 모든 (i, j) 학생 쌍을 완전 탐색하여 i가 j의 멘토가 될 수 있는지 확인
- 시간 복잡도: O(N × M × M × N) ≈ O(N²M²)
- 공간 복잡도: O(1)

[버그 사항]

1. solution 내부에서 n과 m의 의미가 뒤집혀 있음
   - n = test.length = 3      → 실제로는 테스트 수(M)
   - m = test[0].length = 4   → 실제로는 학생 수(N)
   - 결과적으로 외부 루프가 학생 번호(1~N)가 아닌 인덱스(0~2, 0~3)를 순회

2. isMentor 내부 탐색 로직이 비대칭
   - test[s][k]: s를 테스트(행) 인덱스, k를 순위(열)로 사용 → pi에 테스트 인덱스 저장
   - test[k][s]: k를 테스트(행) 인덱스, s를 순위(열)로 사용 → pj에 순위 인덱스 저장
   - 서로 의미가 다른 값(테스트 인덱스 vs 순위 인덱스)을 pi < pj로 비교하는 오류

3. k 루프 범위 오류
   - k < m(=4, 학생 수)으로 4번 순회하지만, 실제 테스트는 n=3개
   - k=3일 때 test[3]은 undefined → pj가 항상 0으로 고정되는 부작용 발생

[개선된 풀이]
- i와 j의 순위를 같은 테스트 내에서 동일한 방법으로 탐색

function isMentor(test, i, j) {
    const m = test.length;    // 테스트 수
    const n = test[0].length; // 학생 수

    for (let k = 0; k < m; k++) { // 각 테스트 순회
        let pi = -1, pj = -1;
        for (let s = 0; s < n; s++) { // 각 순위 위치 탐색
            if (test[k][s] === i) pi = s; // 테스트 k에서 i의 순위
            if (test[k][s] === j) pj = s; // 테스트 k에서 j의 순위
        }
        if (pi >= pj) return false; // 하나라도 i가 j보다 뒤면 멘토 불가
    }
    return true;
}

function solution(test) {
    const m = test.length;    // 테스트 수 (행)
    const n = test[0].length; // 학생 수 (열)
    let answer = 0;

    for (let i = 1; i <= n; i++) {     // 멘토 후보 (학생 번호 1~N)
        for (let j = 1; j <= n; j++) { // 멘티 후보 (학생 번호 1~N)
            if (i !== j && isMentor(test, i, j)) answer++;
        }
    }
    return answer;
}

- 시간 복잡도: O(N² × M × N) = O(N³M)
  → N=20, M=10 기준: 20³ × 10 = 80,000 연산

[핵심 개념]
- 완전 탐색(Brute Force): 가능한 모든 (멘토, 멘티) 쌍을 나열하고 조건을 검증
- 입력 구조 이해: test[k][s]는 "k번째 테스트에서 (s+1)등을 한 학생 번호"
  → 특정 학생의 등수를 구하려면 해당 테스트 행 전체를 선형 탐색해야 함
===== */
