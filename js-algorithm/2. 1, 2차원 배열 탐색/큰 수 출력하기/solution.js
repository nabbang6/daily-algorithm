function solution(arr) {
    let answer = [];
    answer.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) answer.push(arr[i]);
    }
    return answer;
}

arr = [7, 3, 9, 5, 6, 12]
console.log(solution(arr)); // 7, 9, 6, 12

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: arr[i] < arr[i+1]이면 arr[i+1]을 push하는 방식으로, "다음 값이 현재보다 크면 추가"
  - arr[0]을 먼저 무조건 push한 뒤, i=0부터 순회하며 앞-뒤 비교
    - 이는 "현재 값이 이전 값보다 크면 추가"와 동일한 결과를 냄
    - 시간 복잡도: O(n)
- 공간 복잡도: O(n)
- 잘된 점: 단일 순회로 정확한 결과 도출


[핵심 개념]
- 인접 원소 비교 (Adjacent Element Comparison)
  - 배열을 순회하며 현재 원소와 이전(또는 다음) 원소를 비교하는 기본 패턴
  - 루프 범위(시작 인덱스)와 비교 방향(i vs i-1, i vs i+1)을 명확히 설정하는 것이 중요
===== */
