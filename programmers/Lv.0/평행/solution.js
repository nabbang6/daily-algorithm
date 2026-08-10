function solution(dots) { // 평행 직선 찾기
    const pairs = [
        [[0, 1], [2, 3]],
        [[0, 2], [1, 3]],
        [[0, 3], [1, 2]],
    ];

    for (const [[a, b], [c, d]] of pairs) {
        const [x1, y1] = dots[a];
        const [x2, y2] = dots[b];
        const [x3, y3] = dots[c];
        const [x4, y4] = dots[d];

        // 기울기 비교: (y2-y1)/(x2-x1) === (y4-y3)/(x4-x3) → 교차 곱셈
        const slopeEqual = (y2 - y1) * (x4 - x3) === (y4 - y3) * (x2 - x1);

        // 평행 또는 일치 모두 1 반환
        if (slopeEqual) return 1;
    }
    return 0;
}
