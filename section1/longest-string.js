// 14. 가장 긴 문자열
// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램

function PrintLogestWord(s) {
    let answer = "", max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < s.length; i++) {
        if (max < s[i].length) {
            max = s[i].length;
            answer = s[i];
        }
    }
    return answer;
}

function solution(s) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    for (let x of s) {
        if (x.length > max) {
            max = x.length;
            answer = x;
        }
    }
    return answer;
}

let s = ["teacher", "time", "apple", "jonnagilda", "loooooooooong"];
console.log(PrintLogestWord(s))
console.log(solution(s));