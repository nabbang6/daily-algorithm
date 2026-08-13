function solution(numer1, denom1, numer2, denom2) {
    var answer = [];

    // 분수의 합 계산
    let numerator = numer1 * denom2 + numer2 * denom1;
    let denominator = denom1 * denom2;

    answer.push(numerator / gcd(numerator, denominator));
    answer.push(denominator / gcd(numerator, denominator));

    return answer;
}

// 최대공약수 구하기
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}