// 난쟁이가 총 9명이 돌아왔을 때 이중 진짜 난쟁이 7명을 찾는 문제 
// 일곱 난쟁이 키의 합은 100 
// 가능한 정답이 여러 가지인 경우에는 아무거나 출력함 
// -> 2종 for문을 돌다가 최초의 정답을 발견하면 breack   

function findHeight(arr) {
    let answer = arr, sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (let j = 0; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            console.log(arr[j], arr[k]);
            if ((sum - (arr[j] + arr[k])) === 100) {
                arr.splice(k, 1);
                arr.splice(j, 1);
            }
        }
    }
    console.log(answer);
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
findHeight(arr);

function solution(arr) {
    let answer = arr;
    let sum = arr.reduce((a, b) => a + b, 0); // a를 0으로 초기화
    let flag = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            if ((sum - (answer[i] + answer[j])) === 100) {
                answer.splice(j, 1);
                answer.splice(i, 1);
                flag = 1; // 답이 발견되면 flag를 1로 변경
                break;
            }
        }
        if (flag == 1) break;
    }
    return answer;
}

console.log(solution(arr));