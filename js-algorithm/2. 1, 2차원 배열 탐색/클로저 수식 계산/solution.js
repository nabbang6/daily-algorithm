function calcExpression(x, y) {
    function square(n) {
        return n * n;
    }
    function sum() {
        return x + y;
    }
    function diff() {
        return x - y;
    }
    return square(sum()) - square(diff());
}

console.log(calcExpression(5, 3)); // 60
// (5+3)² - (5-3)² = 64 - 4 = 60

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 내부 함수(클로저)가 외부 매개변수 x, y를 직접 참조
  - sum(), diff()는 인수 없이 외부 스코프의 x, y를 캡처해 사용
  - square()는 순수 함수로 n만 받아 제곱 계산
- 시간 복잡도: O(1)
- 공간 복잡도: O(1)
- 잘된 점: 역할이 분리된 내부 함수 구성으로 수식이 명확히 표현됨
- 개선 가능한 점: 현재 풀이가 클로저 학습 목적에 충실한 이상적인 구조

[핵심 개념]
- 클로저 (Closure)
  - 내부 함수가 외부 함수의 스코프(변수)를 기억하고 참조하는 특성
  - sum(), diff()가 calcExpression의 x, y를 캡처하는 것이 핵심
- 수학적 인사이트
  - (x+y)² - (x-y)² = (x²+2xy+y²) - (x²-2xy+y²) = 4xy
  - calcExpression(5, 3) = 4 × 5 × 3 = 60
===== */
