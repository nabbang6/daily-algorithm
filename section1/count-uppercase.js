// 11. 대문자 찾기
// 문자열을 입력받고, 대문자의 개수를 출력하는 프로그램

function findUpperCase(s) {
    let answer = 0;
    for (let x of s) {
        if (x === x.toUpperCase()) answer++;
    }
    return answer;
}
s = "KoreaTimeGood";
console.log(findUpperCase(s));

// 해설지 답안
function solution(s) {
    let answer = 0;
    for (let x of s) {
        console.log(x.toUpperCase(), x) // x를 대문자로 변환
        // 저장하려면 x = x.toUpperCase()
        if (x === x.toUpperCase()) answer++;
    }
}
console.log(solution(s));

