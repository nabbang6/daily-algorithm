function solution(arr) {
    let answer = 0;
    let n = arr.length;

    // 열의 합
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += arr[j][i];
        }
        answer = Math.max(answer, sum);
    }

    // 행의 합
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += arr[i][j];
        }
        answer = Math.max(answer, sum);
    }

    // 대각선의 합
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < n; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][n - 1 - i];
    }
    answer = Math.max(answer, sum1, sum2);

    return answer;
}

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 행, 열, 두 대각선의 합을 각각 계산하여 최댓값을 갱신하는 완전 탐색 방식
- 시간 복잡도: O(N²) — 행 합산 O(N²) + 열 합산 O(N²) + 대각선 합산 O(N) = 전체 O(N²)
- 공간 복잡도: O(1) — 입력 배열 외 추가 공간 없음

잘된 점:
- 열, 행, 대각선을 명확히 분리하여 코드 가독성이 좋음
- 두 대각선을 하나의 루프에서 동시에 계산하여 효율적
- Math.max()로 간결하게 최댓값 갱신

개선 가능한 점:
- 행과 열 순회를 하나의 이중 루프로 합칠 수 있어 반복 횟수를 줄일 수 있음

[개선된 풀이]
- 아이디어: 행, 열, 대각선을 단일 루프로 통합 처리

```js
function solution(arr) {
    let answer = 0;
    let n = arr.length;
    let diagSum1 = 0, diagSum2 = 0;

    for (let i = 0; i < n; i++) {
        let rowSum = 0, colSum = 0;
        for (let j = 0; j < n; j++) {
            rowSum += arr[i][j]; // 행 합
            colSum += arr[j][i]; // 열 합
        }
        diagSum1 += arr[i][i];         // 좌→우 대각선
        diagSum2 += arr[i][n - 1 - i]; // 우→좌 대각선
        answer = Math.max(answer, rowSum, colSum);
    }
    answer = Math.max(answer, diagSum1, diagSum2);

    return answer;
}
```
- 이중 루프를 한 번만 사용하므로 코드가 더 간결해지고 실제 연산 횟수도 절반으로 줄어듦

[핵심 개념]
- 2차원 배열(격자판) 순회: arr[i][j]가 행 우선, arr[j][i]로 열 우선 순회 가능
- 대각선 인덱스 패턴:
  - 주 대각선(↘): arr[i][i] — 행·열 인덱스가 동일
  - 반 대각선(↙): arr[i][n-1-i] — 행 인덱스와 열 인덱스의 합이 항상 n-1
- 동시 최댓값 갱신: Math.max(a, b, c)로 여러 값을 한 번에 비교 가능
===== */