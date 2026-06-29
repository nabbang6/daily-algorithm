function solution(arr) {
  let answer = 0, cnt = 0; // cnt: 연속 정답 횟수
  for (let x of arr) {
    if (x === 1) { // 정답이면 cnt 증가, answer에 누적
      cnt++;
      answer += cnt;
    }
    else cnt = 0; // 오답이면 cnt 초기화
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 연속으로 맞춘 횟수(cnt)를 추적하여 점수에 더하는 방식
  - 정답(1)이면 cnt를 1 증가시키고, 그 cnt값을 answer에 누적
  - 오답(0)이면 cnt를 0으로 초기화 (연속 카운트 리셋)
  - 예) [1, 0, 1, 1, 1]: 1→(cnt=1, +1), 0→(cnt=0), 1→(cnt=1, +1), 1→(cnt=2, +2), 1→(cnt=3, +3) = 7점
- 시간 복잡도: O(n) - 배열을 한 번만 순회
- 공간 복잡도: O(1) - 변수 두 개(answer, cnt)만 사용
- 잘된 점: 단일 순회로 간결하게 해결, 불필요한 연산 없음
- 개선 가능한 점: 현재 풀이가 이미 최적 수준으로 별도 개선이 필요 없음

[핵심 개념]
- 연속 구간 카운팅 (Consecutive Counting)
  - 연속 조건이 충족될 때마다 카운터를 증가시키고, 조건이 깨지면 초기화하는 패턴
  - cnt 자체가 "현재 연속 길이"를 나타내므로, 별도 합산 없이 바로 누적 가능
- for...of를 활용한 간결한 배열 순회
===== */