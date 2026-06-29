// 17. 중복 단어 제거
// n개의 문자열이 입력되면 중복된 문자열은 제거하고 출력

function solution(n, s) {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === i) {
            answer.push(s[i]);
        }
    }
    return answer;
}

n = 5;
s = ["good", "time", "good", "time", "sleep"];
console.log(solution(n, s));

// 해설 답안

function solution2(s) {
    let answer;
    // console.log(s.indexOf("time"));
    answer = s.filter(function (v, i) {
        // if (s.indexOf(v) === i) return true;
        return s.indexOf(v) === i;
    });
    return answer;
}

console.log(solution2(s));