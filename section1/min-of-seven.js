// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램

function findMin(arr) {
    let min = 99999;
    for (let i = 0; i < 6; i++) {
        if (min > arr[i]) {
            min = arr[i];
        };
    };

    console.log(min);
}

let arr = [5, 7, 1, 3, 2, 8, 9, 11];
findMin(arr);

// 해설지 답안 

function solution(arr) {
    let answer, min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;

    // Math.min(...arr); 로 구해도 됨
    // 단 Math.(arr)은 불가능
    // 인자로만 넘겨야지 배열/객체로는 넘길 수 없음 
    // Math.min.apply(null, arr); 
}

console.log(solution(arr));
