// 100 이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램 
// (정렬을 사용하지 않고 if문을 사용할 것)

function findMin(a, b, c) {
    let min;
    if ((a < b) && (c < a)) {
        min = a;
    } else if ((b < a) && (b < c)) {
        min = b;
    } else {
        min = c;
    }

    console.log("min = ", min);
}

findMin(6, 5, 11);

// 풀이 

function solution(a, b, c) {
    let answer;
    if (a < b) answer = 0;
    else answer = b;
    if (c < answer) answer = c;

    return answer;
}

console.log(solution(6, 5, 11));