// 자동차10부제

function findCar(date, carNum) {
    let answer = [];
    for (let i = 0; i < carNum.length; i++) {
        if (date === carNum[i] % 10) answer.push(carNum[i]);
    }
    console.log(answer.length);
}

arr = [12, 20, 54, 30, 87, 91, 33]
findCar(3, arr);

// 해설지 답안 
function solution(day, arr) {
    let answer = 0;
    for (let x of arr) {
        if (x % 10 === day) answer++;
    }
    return answer;
}

console.log(solution(3, arr));