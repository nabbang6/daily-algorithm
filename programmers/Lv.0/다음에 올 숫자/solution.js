function solution(common) {
    var answer = 0;
    for (let i = 0; i < common.length - 2; i++) {
        const diff1 = common[i + 1] - common[i];
        const diff2 = common[i + 2] - common[i + 1];
        const ratio1 = common[i + 1] / common[i];
        const ratio2 = common[i + 2] / common[i + 1];

        if (diff1 === diff2) { // 등차수열
            answer = common[common.length - 1] + diff1;
            break;
        } else if (ratio1 === ratio2) { // 등비수열
            answer = common[common.length - 1] * ratio1;
            break;
        }
    }
    return answer;
}

let common = [1, 2, 3, 4];
console.log(solution(common)); // 5