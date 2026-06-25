function solution(arr) {
    let n = arr.length; // 학생 수
    let answer = Array.from({ length: n }, () => 1); // 등수 배열 초기화
    for (let i = 0; i < n; i++) { // 각 학생에 대해
        for (let j = 0; j < n; j++) { // 다른 학생과 비교
            if (arr[i] < arr[j]) { // i번째 학생보다 j번째 학생이 키가 크면
                answer[i]++; // 등수 증가
            }
        }
    }
    return answer;
}

/* ===== Claude 해설 =====

[풀이 분석]
- 등수 배열을 모두 1로 초기화한 뒤, 이중 반복문으로 각 학생 i와 나머지 학생 j를 전부 비교한다.
- arr[i] < arr[j]인 경우(i 학생보다 점수 높은 j 존재) answer[i]를 증가시켜 등수를 후순위로 밀어낸다.
- 동점자는 카운트에 포함되지 않아 자연스럽게 공동 등수가 처리된다.
- 시간 복잡도: O(N²) — N이 최대 100이므로 최대 10,000번 비교로 충분히 허용 범위
- 공간 복잡도: O(N) — 등수 저장 배열
- 잘된 점: Array.from으로 초기값 1을 한 번에 세팅해 가독성이 좋다.
- 개선 가능한 점: 주석에 "키가 크면"이라고 되어 있으나 "점수가 높으면"이 정확한 표현이다 (로직 자체는 올바름).

[개선된 풀이]
- N이 커질 경우 정렬 + Map을 활용해 O(N log N)으로 줄일 수 있다.
- 점수를 내림차순 정렬해 각 점수의 등수를 미리 Map에 기록한 뒤, 원래 순서대로 조회한다.

function solution(arr) {
    const sorted = [...arr].sort((a, b) => b - a);
    const rankMap = new Map();
    sorted.forEach((score, idx) => {
        if (!rankMap.has(score)) rankMap.set(score, idx + 1); // 동점은 첫 등장 순위 유지
    });
    return arr.map(score => rankMap.get(score));
}

[핵심 개념]
- 브루트포스(완전 탐색): 모든 쌍을 비교하는 O(N²) 접근법
- 정렬 + 해시맵: 정렬로 순위를 결정하고 Map으로 O(1) 조회해 전체 O(N log N)으로 최적화
- 동점 처리: 같은 점수는 동일 등수를 부여하고 그 다음 등수는 동점자 수만큼 건너뜀
===== */