// 12. 대소문자변환
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아
// 대문자로 모두 통일하여 문자열을 출력하는 프로그램 

function changeUpperCase(str) {
    let answer = "";
    for (let x of str) {
        if (x === x.toLowerCase()) answer += x.toUpperCase();
        else answer += x;
    }
    return answer;
}

let s = "ItisTimeToStudy"
console.log(changeUpperCase(s));

function solution(str) {
    let answer = "";
    for (let x of s) {
        let num = x.charCodeAt(); // char -> 아스키넘버 변환 함수 
        if (num >= 97 && num <= 122) { // 소문자 아스키넘버 * 
            // 소문자 a가 97, 대문자 A가 97
            // 소문자 - 32 는 대문자가 됨  
            answer += String.fromCharCode(num - 32); // 아스키넘버 -> char 변환 함수 
        }
        else answer += x;
    }
    return answer;
}

console.log(solution(s));