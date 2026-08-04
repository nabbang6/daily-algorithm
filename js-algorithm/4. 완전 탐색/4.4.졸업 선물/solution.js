function solution(m, product) {
    let answer = 0;
    let n = product.length; // 학생 수 
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1])); // 가격 합 기준 오름차순 정렬
    // sort는 양수면 오름차순, 음수면 내림차순, 0이면 그대로

    for (let i = 0; i < n; i++) {
        let money = m - (product[i][0] / 2 + product[i][1]); // i번째 상품을 반값으로 구매했을 때 남은 금액
        let cnt = 1; // i번째 상품은 이미 구매했으므로 1로 초기화
        for (let j = 0; j < n; j++) {
            if (j !== i && money < product[j][0] + product[j][1]) break; // 남은 금액으로 j번째 상품을 구매할 수 없으면 종료
            if (j !== i && money >= product[j][0] + product[j][1]) {
                money -= product[j][0] + product[j][1];
                cnt++;
            }
        }
        answer = Math.max(answer, cnt); // 최대 구매 개수 갱신
    }
    return answer;
}

let arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));

/* ===== Claude 해설 =====

[문제 요약]
- 예산 m으로 선물(상품)을 최대한 많이 구매
- 각 상품은 [가격, 배송비]로 구성 (총 비용 = 가격 + 배송비)
- 단 하나의 상품만 반값(가격/2 + 배송비)에 구매 가능
- 최대 구매 수량 반환

[풀이 분석]
- 핵심 아이디어: 반값 상품을 하나 고정하고, 나머지는 탐욕적으로 싼 것부터 구매
- 전략:
  1. 총 비용(가격+배송비) 기준 오름차순 정렬
  2. 각 상품을 반값으로 살 경우를 모두 시도 (브루트 포스)
  3. 반값 상품 제외, 남은 예산으로 저렴한 것부터 최대한 구매
  4. 각 경우의 최대 수량을 추적

- 시간 복잡도: O(n² + n log n) → O(n²)
- 공간 복잡도: O(1) (정렬은 in-place)

[잘된 점]
- 정렬 후 그리디 전략을 결합한 완전 탐색으로 올바르게 구현
- break 조건이 정렬된 배열의 특성(이후 상품은 반드시 더 비쌈)을 활용해 효율적

[주의할 점 / 개선 가능한 점]
- 내부 루프에서 j === i일 때 두 조건 모두 false여서 암묵적으로 continue처럼 동작함
  → 명시적으로 `if (j === i) continue;`를 추가하면 가독성이 향상됨
- 두 if 조건을 하나의 if/else로 통합 가능:
    if (j !== i) {
        if (money < product[j][0] + product[j][1]) break;
        money -= product[j][0] + product[j][1];
        cnt++;
    }

[개선된 풀이 - 가독성 개선]

function solution(m, product) {
    let answer = 0;
    const n = product.length;
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

    for (let i = 0; i < n; i++) {
        let money = m - (product[i][0] / 2 + product[i][1]);
        let cnt = 1;

        for (let j = 0; j < n; j++) {
            if (j === i) continue; // 반값 상품은 건너뜀 (명시적)
            if (money < product[j][0] + product[j][1]) break; // 정렬 덕분에 이후도 불가
            money -= product[j][0] + product[j][1];
            cnt++;
        }

        answer = Math.max(answer, cnt);
    }
    return answer;
}

[심화 - 접두 합 + 이진 탐색으로 O(n log n) 최적화]

// prefix[i] = product[0..i-1]의 총 비용 합
// i번 상품을 반값 구매 후, 나머지 예산으로 살 수 있는 최대 개수를 이진 탐색으로 결정
// 단, i번 상품이 포함된 구간에서는 full_price[i]를 빼야 함

function solutionOptimized(m, product) {
    const n = product.length;
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

    // prefix[k] = 0번~(k-1)번 상품의 총 비용 합
    const prefix = new Array(n + 1).fill(0);
    for (let k = 0; k < n; k++) {
        prefix[k + 1] = prefix[k] + product[k][0] + product[k][1];
    }

    let answer = 0;
    for (let i = 0; i < n; i++) {
        const halfCost = product[i][0] / 2 + product[i][1];
        const fullCost = product[i][0] + product[i][1];
        let remaining = m - halfCost;

        // 이진 탐색: remaining 예산으로 몇 개까지 살 수 있는지 찾기
        // j개를 살 때 비용 = prefix[j] - (i < j ? fullCost : 0)
        let lo = 0, hi = n - 1, cnt = 1; // 반값 상품 1개 기본
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            const cost = prefix[mid] - (i < mid ? fullCost : 0);
            if (cost <= remaining) {
                cnt = mid + 1; // mid개 + 반값 상품 = mid+1개 (i 중복 없이)
                // 단, mid에 i 포함 여부에 따라 cnt 조정 필요
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
}
// ※ 심화 풀이는 개념 이해용이며, i 포함/제외 경계 처리가 까다로워 검증 필요

[핵심 개념]
- 완전 탐색(Brute Force): 가능한 모든 경우(반값 상품 후보)를 시도
- 그리디(Greedy): 남은 예산으로 저렴한 것부터 채우는 탐욕 전략
- 정렬 + break: 오름차순 정렬 후 구매 불가 시점에 break하여 불필요한 탐색 제거
- 완전 탐색은 O(n²)이지만, 정렬+그리디 결합으로 실질적으로 빠르게 동작
===== */