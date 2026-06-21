// 13. 대소문자변환 
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아
// 대문자는 소문자로, 소문자는 대문자로 변환하여 출력

function changeCase(str) {
    let answer = "";
    for (let x of str) {
        if (x !== x.toUpperCase()) answer += x.toUpperCase();
        else answer += x.toLowerCase();
    }
    return answer;
}

let str = "StuDY";
console.log(changeCase(str));

// 답안지 해설

function solution(str) {
    // 대문자 통일할 때는 한 줄로 가능 
    // let answer = s.toUpperCase();

    let answer = "";
    for (let x of str) {
        if (x === x.toUpperCase()) answer += x.toLowerCase();
        else answer += x.toUpperCase();
    }
    return answer;
}

console.log(solution(str));