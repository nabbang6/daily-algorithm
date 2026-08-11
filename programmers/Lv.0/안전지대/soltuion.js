function solution(board) {
    const n = board.length;
    const m = board[0].length;
    const danger = Array.from({ length: n }, () => Array(m).fill(0)); // 안전지대 표시 배열 초기화

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 1) { // 지뢰일 시
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        const newX = i + x;
                        const newY = j + y;
                        // 범위 체크 후 주변 8칸을 1로 표시
                        if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
                            danger[newX][newY] = 1;
                        }
                    }
                }
            }
        }
    }

    return danger.flat().filter(k => k === 0).length; // 안전지대(0) 개수 세기
}

let board = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]
console.log(solution(board)); // 16