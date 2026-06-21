const curryComplexMath = a => b => c => d => e => ((a - b) / c) + (d * e)

const step1 = curryComplexMath(20); // a = 20
const step2 = step1(4); // b = 4
const step3 = step2(2); // c = 2
const step4 = step3(3); // d = 3
const result = step4(5); // e = 5
// ((20 - 4) / 2) + (3 * 5) = 23

console.log(result); // 23

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