// 대문자로 이루어진 영어단어가 입력되면
// 단어에 포함된 A를 전부 #으로 바꾸어 출력하는 프로그램

// 문자열은 불변이기 때문에 수정이 불가능함** 

function changeA(str) {
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') answer += '#';
        else answer += str[i];
    }

    return answer;
}

let str = "BANANA";
console.log(changeA(str));

// 답안지 해설 

function solution(str) {
    let answer = "";
    for (let x of str) {
        if (x === 'A') answer += '#';
        else answer += x;
    }
    return answer;
}

function solution2(s) {
    let answer = s; // string은 주소 참조가 아니라 값이 복사되는 방식임
    answer = answer.replace(/A/g, '#'); // g -> global (전역)
    return answer;
}

console.log(solution(str));
console.log(solution2(str));