const curryComplexMath = a => b => c => d => e => ((a - b) / c) + (d * e)

const step1 = curryComplexMath(20); // a = 20
const step2 = step1(4); // b = 4
const step3 = step2(2); // c = 2
const step4 = step3(3); // d = 3
const result = step4(5); // e = 5
// ((20 - 4) / 2) + (3 * 5) = 23

console.log(result); // 23

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 화살표 함수를 연속으로 반환하는 커링 구조
  - 각 화살표 함수는 자신의 인수를 클로저로 캡처하고 다음 함수를 반환
  - 마지막 인수 e까지 받은 시점에 수식을 계산해 값을 반환
- 시간 복잡도: O(1)
- 공간 복잡도: O(1)
- 잘된 점: 한 줄로 커링 함수를 간결하게 표현, 단계별 변수 저장으로 가독성 확보
- 개선 가능한 점: 현재 풀이가 이미 이상적인 커링 표현 방식

[핵심 개념]
- 커링 (Currying)
  - 여러 인수를 받는 함수를 인수 하나씩 받는 함수의 체인으로 변환하는 기법
  - f(a, b, c) → f(a)(b)(c) 형태
  - 부분 적용(partial application)이 가능해져 함수 재사용성이 높아짐
- 클로저 (Closure)
  - 각 단계의 함수가 이전 단계의 인수를 스코프 체인으로 기억
===== */
