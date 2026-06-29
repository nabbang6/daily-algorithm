function solution(arr) {
    let answer = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 봉우리 조건: 상하좌우보다 큰 경우
            let isPeak = true;
            if (i > 0 && arr[i][j] <= arr[i - 1][j]) isPeak = false; // 상
            if (i < n - 1 && arr[i][j] <= arr[i + 1][j]) isPeak = false; // 하
            if (j > 0 && arr[i][j] <= arr[i][j - 1]) isPeak = false; // 좌
            if (j < n - 1 && arr[i][j] <= arr[i][j + 1]) isPeak = false; // 우

            // 봉우리이면 answer 증가
            if (isPeak) answer++;
        }
    }
    return answer;
}

/* ===== Claude 해설 =====

[풀이 분석]

◆ solution (직접 방향 체크)
- 이중 반복문으로 N×N 격자를 순회하며, 상하좌우 4방향을 각각 독립 조건으로 체크
- 가장자리 조건(i > 0 등)을 이용해 배열 범위를 직접 방어
- isPeak가 false로 바뀐 이후에도 나머지 조건을 모두 평가하므로 조기 종료 없음
- 시간 복잡도: O(N²)  |  공간 복잡도: O(1)

◆ solution2 (델타 배열 활용)
- dx/dy 델타 배열로 4방향을 추상화 → 방향 수가 늘어나도 코드 구조 변경 불필요
- break로 조기 종료가 가능해 최악이 아닌 경우 실제 연산 횟수가 줄어듦
- 코드 확장성이 높고 패턴이 명확해 실무/코딩테스트에서 자주 쓰이는 관용구
- 시간 복잡도: O(N²)  |  공간 복잡도: O(1)

[개선 아이디어 — 패딩(Padding) 기법]
문제 조건 "가장자리는 0으로 초기화"를 그대로 활용해, 격자 주위에 실제로 0을 채운
(N+2)×(N+2) 배열을 만들면 범위 체크 없이 모든 셀을 동일하게 처리할 수 있습니다.

function solutionWithPadding(arr) {
    const n = arr.length;
    // (N+2) × (N+2) 패딩 배열 생성 (테두리는 0)
    const board = Array.from({ length: n + 2 }, (_, i) =>
        i === 0 || i === n + 1
            ? Array(n + 2).fill(0)
            : [0, ...arr[i - 1], 0]
    );

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            // every로 4방향 모두 현재 값보다 작은지 검사
            if (dx.every((d, k) => board[i][j] > board[i + d][j + dy[k]])) {
                answer++;
            }
        }
    }
    return answer;
}

장점: 범위 체크 분기가 사라져 루프 내부가 단순해지고 가독성이 높아집니다.
단점: N이 클수록 패딩 배열 생성 비용이 추가되지만, 이 문제(N≤50) 수준에서는 무시 가능합니다.

[핵심 개념]
- 2D 격자 완전 탐색: 이중 for 루프로 모든 셀 방문
- 델타(Delta) 배열 패턴: dx/dy 배열로 방향을 추상화 — 4방향·8방향 문제 모두 동일 구조 적용 가능
- 패딩(Padding) 기법: 경계 조건을 코드 분기 없이 처리하는 테크닉
- 조기 종료(Early Exit): 조건이 확정되는 즉시 반복을 break해 불필요한 연산 제거

===== */

function solution2(arr) {
    let answer = 0;
    let n = arr.length;

    // 상하좌우를 판단하기 위해 델타 배열 사용
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let isPeak = true;
            for (let k = 0; k < 4; k++) { // 상하좌우 4방향 체크
                const ni = i + dx[k]; // 새로운 행 인덱스
                const nj = j + dy[k]; // 새로운 열 인덱스
                if (ni >= 0 && ni < n && nj >= 0 && nj < n) { // 배열 범위 내에서만 비교
                    if (arr[i][j] <= arr[ni][nj]) {
                        isPeak = false;
                        break;
                    }
                }
            }
            if (isPeak) answer++;
        }
    }
    return answer;
}