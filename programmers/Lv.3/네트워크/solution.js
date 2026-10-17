function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (visited[i] == false) { // 아직 안 가본 컴퓨터 = 새로운 네트워크 발견
            dfs(i); // 연결된 애들을 전부 방문 처리
            answer++;
        }
    }

    return answer;
}

function dfs(i) {
    visited[i] = true; // i번 컴퓨터 방문 표시
    for (let j = 0; j < n; j++) {
        // i와 직접 연결돼 있고, 아직 안 가본 컴퓨터면 그쪽으로 이동
        if ((visited[j] == false) && (computers[i][j] == 1)) dfs(j);
    }
}