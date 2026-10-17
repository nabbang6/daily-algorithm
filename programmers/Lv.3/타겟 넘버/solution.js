function solution(numbers, target) {
    var answer = 0;

    function dfs(index, sum) { // index: 현재 위치, sum: 현재까지의 합
        if (index === numbers.length) { // 모든 숫자를 다 사용했을 때
            if (sum === target) answer++;
            return;
        }

        dfs(index + 1, sum + numbers[index]); // 현재 위치의 숫자를 더하는 경우
        dfs(index + 1, sum - numbers[index]); // 현재 위치의 숫자를 빼는 경우
    }

    dfs(0, 0);
    return answer;
}