function solution(str) {
    let answer = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) { // 다음 글자와 같으면
            count++;  // 카운트 증가
        }
        else { // 다음 글자와 다르면
            if (count === 1) {
                answer += str[i]; // 글자만 추가
            }
            else {
                answer += str[i] + count; // 글자와 카운트 합쳐서 answer에 추가
            }
            count = 1; // 카운트 초기화
        }
    }
    return answer;
}

str = 'KKHSSSSSSSE';
console.log(solution(str)); // K2H1S7E1

/* ===== Claude 해설 =====

[풀이 분석]
- 핵심 아이디어: 문자열을 순회하면서 현재 문자와 다음 문자를 비교해 연속 횟수를 누적하고,
  다른 문자를 만나는 순간 문자+횟수를 결과에 추가하는 방식
- 시간 복잡도: O(n) — 문자열을 한 번 순회
- 공간 복잡도: O(n) — 결과 문자열 저장

[버그]
1. 반복 횟수가 1인 경우 생략 조건이 누락되었습니다.
   현재 코드는 count가 1일 때도 숫자를 붙여 'H1', 'E1' 처럼 출력합니다.
   문제 조건에 따라 count가 1이면 숫자를 생략해야 합니다.
   현재 출력: K2H1S7E1 (잘못됨)
   기대 출력: K2HS7E   (정답)

[개선된 풀이]
count가 1보다 클 때만 숫자를 추가합니다.

function solution(str) {
    let answer = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            answer += str[i] + (count > 1 ? count : '');
            count = 1;
        }
    }
    return answer;
}

[핵심 개념]
- 런-길이 인코딩(Run-Length Encoding, RLE): 연속된 동일 데이터를 '데이터+횟수' 쌍으로
  압축하는 가장 기본적인 압축 알고리즘
- 인접 비교 패턴: str[i]와 str[i+1]을 비교해 경계를 감지하는 전형적인 문자열 순회 패턴
- 조건부 출력: 횟수가 1일 때 생략하는 등 특수 케이스를 별도 처리하는 습관이 중요
===== */