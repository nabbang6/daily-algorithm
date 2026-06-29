function doAll(x, y, ...ops) {
    let result = x;
    for (const op of ops) {
        if (typeof op === 'function') {
            result = op(result, y);
        }
    }
    return result;
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const pow = (a, b) => a ** b;

console.log(
    doAll(2, 3, add, pow, sub, 'hello'),
); // 122
// add(2, 3) -> 5
// pow(5, 3) -> 5 ** 3 = 125
// sub(125, 3) -> 122

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 가변 인수 ...ops를 순회하며 함수만 골라 순차 적용
  - typeof op === 'function'으로 비함수 인수를 안전하게 무시
  - 각 단계의 결과(result)가 다음 연산의 첫 번째 인수로 전달, y는 고정
- 시간 복잡도: O(n) — ops 길이만큼 순회
- 공간 복잡도: O(1)
- 잘된 점: 타입 검사로 방어적 처리, 명확한 흐름
- 개선 가능한 점: filter + reduce를 조합하면 더 함수형 스타일로 표현 가능

[개선된 풀이]
- ops를 filter로 함수만 추려낸 뒤 reduce로 순차 적용하는 방식

function doAll(x, y, ...ops) {
    return ops
        .filter(op => typeof op === 'function')
        .reduce((acc, op) => op(acc, y), x);
}

[핵심 개념]
- 가변 인수 (Rest Parameters, ...ops)
  - 개수가 정해지지 않은 인수를 배열로 수집
- 고차 함수 (Higher-Order Function)
  - 함수를 인수로 받아 동적으로 실행하는 패턴
- Array.reduce를 활용한 함수형 파이프라인
===== */
