function solution(arr) {
    let answer = [];
    for (let x of arr) {
        let reversed = 0;
        while (x) {
            let t = x % 10; // 일의 자리 수 추출
            reversed = reversed * 10 + t; // 자릿수 뒤집기
            x = Math.floor(x / 10); // 자릿수 제거
        }
        if (isPrime(reversed)) {
            answer.push(reversed);
        }
    }
    return answer;
}

function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) { // 제곱근까지만 확인
        if (num % i === 0) return false;
    }
    return true;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr)); // [23, 2, 73, 2, 3]

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 숫자를 10으로 반복 나누며 나머지(일의 자리)를 추출해 뒤집은 수를 만들고, 소수 판별 함수에 넘기는 방식
- while (x) 루프로 자릿수를 하나씩 꺼내 reversed = reversed * 10 + t 로 재조립
  → 예: 370 → t=0, r=0 → t=7, r=7 → t=3, r=73
  → 앞자리 0이 자동으로 무시됨 (0을 뒤집으면 0이 되어 10을 곱해도 의미 없음)
- isPrime에서 제곱근까지만 나누어 확인하는 최적화 적용
- 시간 복잡도: O(N × (d + √M))  — N: 배열 길이, d: 자릿수, M: 뒤집힌 수의 최댓값
- 공간 복잡도: O(1)  (결과 배열 제외)
- 잘된 점: 수학적 자릿수 분해 방식으로 앞자리 0 제거 문제를 자연스럽게 해결
- 개선 가능한 점:
  1. isPrime(1)은 false를 반환하지만, isPrime(0)은 루프가 돌지 않아 true를 반환
     → `if (num < 2) return false;` 한 줄로 방어하면 더 견고해짐
  2. `parseInt(Math.sqrt(num))` 대신 `Math.sqrt(num)` 그대로 써도 동일하게 동작
     (부동소수점 비교 시 정수 범위 내에서 결과가 같음)

[개선된 풀이] — 문자열 뒤집기 방식 (가독성 향상)
  자릿수 분해 대신 문자열 변환 + reverse()를 사용하면 코드가 더 직관적

  function solution2(arr) {
    const isPrime = (n) => {
      if (n < 2) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    };

    return arr
      .map((x) => Number(String(x).split("").reverse().join(""))) // 뒤집기
      .filter(isPrime); // 소수만 필터
  }

  - String(x).split("").reverse().join("") → Number() 변환 시 앞자리 0이 자동 제거
  - map + filter 체이닝으로 선언형 스타일로 작성 가능
  - 시간/공간 복잡도는 동일하나, 문자열 변환 비용이 약간 추가됨 (실무에서는 무시 가능한 수준)

[핵심 개념]
- 자릿수 분해: x % 10 으로 일의 자리 추출, Math.floor(x / 10) 으로 자릿수 제거
  → 뒤집기, 자릿수 합 등 다양한 문제에서 반복 활용되는 패턴
- 소수 판별 (Trial Division): 2부터 √n 까지만 확인하면 O(√n) 으로 충분
  → 소수인지 아닌지만 판별할 때 가장 기본적이고 효율적인 방법
- 에라토스테네스의 체: 소수 판별을 N번 이상 반복해야 하거나 특정 범위의 모든 소수가
  필요한 경우 O(M log log M) 전처리 후 O(1) 조회로 더 유리함
  → 이 문제는 입력이 최대 100개, 수의 크기가 최대 100,000이므로 현재 방식으로 충분

===== */