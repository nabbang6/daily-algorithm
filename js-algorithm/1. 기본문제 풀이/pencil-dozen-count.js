// 연필 1다스는 12자루
// 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명인 학생 수를 입력하면 
// 필요한 연필의 다스 수를 계산하는 프로그램 

function calculatePencil(num) {
    let pencil = 0;
    if (num % 12 == 0) pencil = num / 12;
    else pencil = Math.floor(num / 12) + 1;

    console.log(pencil);
}

calculatePencil(178);

// 풀이
function solution(num) {
    let answer = Math.ceil(num / 12); // 올림 함수 
    return answer;
}

console.log(solution(178));