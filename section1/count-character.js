// 10. 문자 찾기
// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 
// 해당 특정문자가 입력받은 문자열이 몇 개 존재하는지 알아내는 프로그램
// 문자열 길이는 100을 넘지 않음

function findStr(str, s) {
    let answer = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === s) answer++;
    }
    return answer;
}

str = "COMPUTERPROGRAMMING";
s = "R";
console.log(findStr(str, s));

function solution(s, t) {
    let answer = 0;
    for (let x of s) {
        if (x === t) answer++;
    }
    return answer;
}

// 문자열을 R을 기준으로 쪼개고, 그 문자열의 개수를 count
// R을 구분자로 사용해서 split
function solution2(s, t) {
    let answer = s.split(t).length;
    return answer - 1;
}

console.log(solution(str, "R"));
console.log(solution2(str, "R"));