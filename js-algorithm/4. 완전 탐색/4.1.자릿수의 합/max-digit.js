function maxDigit(n) {
    let max = 0;

    while (n > 0) {
        let digit = n % 10; // 일의 자리 수 추출
        if (digit > max) {
            max = digit; // 최대 자릿수 갱신

        }
        n = Math.floor(n / 10); // 자릿수 제거
    }

    return max;
}

console.log(maxDigit(3947)); // 9
console.log(maxDigit(1023)); // 3
console.log(maxDigit(5555)); // 5