function solution(s, t) {
    let answer = [];
    let p = 0;
    for (let x of s) {
        if (x === t) p = 0;
        else p++;
        answer.push(p);
    }
    return answer;
}

s = 'teachermode';
t = 'e';
console.log(solution(s, t)); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 왼쪽에서 오른쪽으로 순회하며 t를 만날 때마다 p=0으로 리셋, 아니면 p++ 후 누적
- 시간 복잡도: O(n)
- 공간 복잡도: O(n) — 결과 배열
- 문제점: 왼쪽에서 가장 가까운 t까지의 거리만 기록함. 오른쪽에 더 가까운 t가 있는 경우를 반영하지 못해 틀린 결과가 나옴

실제 실행 결과: [1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 0]  ← 'h', 'm', 'o', 'd'가 틀림
기댓값:        [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]

예) 인덱스 4의 'h': 왼쪽 'e'(인덱스 1)까지 거리 3, 오른쪽 'e'(인덱스 5)까지 거리 1 → 최솟값은 1이어야 함

[개선된 풀이]
- 개선 아이디어: 두 번 순회(Two-pass)
  1. 왼→오: 왼쪽에서 가장 가까운 t까지의 거리를 기록
  2. 오→왼: 오른쪽에서 가장 가까운 t까지의 거리와 비교해 최솟값으로 갱신

function solution(s, t) {
    const answer = new Array(s.length).fill(1000);
    let p = 1000;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === t) p = 0;
        else p++;
        answer[i] = p;
    }

    p = 1000;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) p = 0;
        else p++;
        answer[i] = Math.min(answer[i], p);
    }

    return answer;
}

[핵심 개념]
- Two-pass(양방향 순회): 한 방향으로만 보면 반대편 정보를 놓침. 왼→오로 한 번, 오→왼으로 한 번 순회해 양쪽 최솟값을 합산하는 패턴
- 초기값 설정: 도달 불가 상태를 나타낼 때 Infinity 대신 충분히 큰 정수(문자열 길이 이상)를 사용하면 정수 연산을 유지할 수 있음
===== */