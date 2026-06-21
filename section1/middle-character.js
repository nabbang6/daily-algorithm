// 15. 가운데 문자 출력
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력
// 단어의 길이가 짝수일 경우, 가운데 2개의 문자 출력 

function FindMiddle(s) {
    let answer = "";
    let mid = Math.floor(s.length / 2);
    if (s.length % 2 === 0) {
        answer = s[mid - 1] + s[mid];
    }
    else answer = s[mid];
    return answer;
}

// 해설 답안
function solution(s) {
    let answer = "";
    let mid = Math.floor(s.length / 2);
    if (s.length % 2 == 1) answer = s.substring(mid, mid + 1);
    // if (s.length % 2 == 1) answer = s.substr(mid, 1);
    else answer = s.substring(mid - 1, mid + 1);
    // else answer = s.substring(mid - 1, 2);
    return answer;
}

let s = "study";
let s2 = "good";
console.log(FindMiddle(s))
console.log(FindMiddle(s2))
console.log(solution(s));
console.log(solution(s2));
