const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line]; // 입력받은 값을 배열에 저장
    console.log(line); // 입력받은 값 출력
}).on('close', function () { // 입력이 끝나면 실행되는 부분
    str = input[0]; // 배열의 첫 번째 요소를 str 변수에 저장
});

