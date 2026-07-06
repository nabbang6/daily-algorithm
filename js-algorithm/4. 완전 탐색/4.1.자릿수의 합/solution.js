function solution(arr) {
    let answer;
    let max = 0;

    for (let x of arr) {
        let sum = 0;
        let tmp = x;

        while (tmp > 0) { // 자릿수 합 계산
            sum += tmp % 10; // 일의 자리 수 추출
            tmp = Math.floor(tmp / 10); // 자릿수 제거
        }

        if (sum > max || (sum === max && x > answer)) { // 최대값 갱신
            max = sum; // 최대 자릿수 합
            answer = x; // 최대 자릿수 합을 가진 자연수
        }
    }
    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr)); // 137

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 각 숫자에 대해 % 10으로 일의 자리를 추출하고 Math.floor로 자릿수를 제거하는
  반복을 통해 자릿수의 합을 구한 뒤, 최댓값과 비교·갱신하는 방식
- 시간 복잡도: O(n * k) — n은 배열 길이, k는 최대 자릿수 (최대 7자리)
- 공간 복잡도: O(1)
- 자릿수 분해 방법(% 10, Math.floor)이 정확하게 구현되어 있음

[버그]
동점(자릿수 합이 같은) 처리 조건이 누락되어 있습니다.

문제 조건: "자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다"

현재 코드의 `if (sum > max)` 조건은 동점일 때 먼저 발견된 숫자를 유지합니다.
테스트 케이스에서 128(합=11)과 137(합=11)이 동점인데, 128이 먼저 발견되므로
실제 출력은 137이 아닌 128입니다. (주석의 기대값 137과 불일치)

수정 방법: 동점일 때 현재 숫자가 더 크면 갱신하는 조건을 추가합니다.

if (sum > max || (sum === max && x > answer)) {
    max = sum;
    answer = x;
}

[개선된 풀이]
동점 처리 조건을 추가한 버전입니다.

function solution(arr) {
    let answer;
    let max = 0;

    for (let x of arr) {
        let sum = 0;
        let tmp = x;

        while (tmp > 0) {
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }

        if (sum > max || (sum === max && x > answer)) {
            max = sum;
            answer = x;
        }
    }
    return answer;
}

[핵심 개념]
- 자릿수 분해: % 10으로 일의 자리 추출, Math.floor(n / 10)으로 자릿수 제거
  — 숫자 문제에서 자주 쓰이는 기본 패턴
- 완전 탐색(Brute Force): 모든 원소를 빠짐없이 순회하며 조건을 확인하는 방식
- 동점 처리: 비교 조건에서 동등 케이스를 명시적으로 처리하는 습관이 중요
===== */