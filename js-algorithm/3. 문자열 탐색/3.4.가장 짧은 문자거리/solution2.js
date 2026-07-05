function solution2(s, t) {
    const answer = [];
    let p = 1000;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t) p = 0;
        else p++;
        answer[i] = p;
    }
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) p = 0;
        else p++;
        answer[i] = Math.min(answer[i], p);
    }
    return answer;
}

s = 'teachermode';
t = 'e';
console.log(solution(s, t)); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]