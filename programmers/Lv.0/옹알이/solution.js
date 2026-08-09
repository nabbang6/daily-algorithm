function solution(babbling) {
    let answer = 0;
    const words = ["aya", "ye", "woo", "ma"];

    for (let i = 0; i < babbling.length; i++) {
        let str = babbling[i]; // 현재 단어
        for (let j = 0; j < words.length; j++) {
            str = str.replaceAll(words[j], " "); // 단어를 공백으로 치환
        }
        if (str.trim() === "") {
            answer++; // 공백 제거 후 빈 문자열이면 발음 가능한 단어
        }
    }

    return answer;
}

let babbling = ["aya", "yee", "u", "maa", "wyeoo"];
console.log(solution(babbling));