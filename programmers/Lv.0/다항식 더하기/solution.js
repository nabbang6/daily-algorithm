function solution(polynomial) {
    var answer = '';
    const arr = polynomial.split(' + '); // "3x + 7 + x" => ["3x", "7", "x"]
    let xSum = 0;
    let numSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('x')) {
            // x만 있으면 계수는 1, 아니면 숫자 추출
            const coeff = arr[i] === 'x' ? 1 : parseInt(arr[i]);
            xSum += coeff;
        } else {
            numSum += parseInt(arr[i]);
        }
    }

    const result = [];
    if (xSum > 0) result.push(xSum === 1 ? 'x' : `${xSum}x`);
    if (numSum > 0) result.push(numSum);
    answer = result.join(' + ');

    return answer;
}

console.log(solution("3x + 7 + x")); // "4x + 7"