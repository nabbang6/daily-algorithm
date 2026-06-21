// 16. 소문자로 된 한 개의 문자열이 입력되면 
// 중복된 문자를 제거하고 출력하는 프로그램
// *제거된 문자열의 각 문자는 원래의 문자열 순서를 유지하도록 함*

function deleteStr(str) {
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === i) answer += str[i];
    }
    return answer;
}

// 특정 문자 개수 찾기 
function solution(str) {
    let answer = 0;
    let pos = str.indexOf('K');
    while (pos !== -1) {
        answer++;
        pos = s.indexOf('K', pos + 1);
    }
    return answer;
}

str = "ksekkset";
console.log(deleteStr(str));