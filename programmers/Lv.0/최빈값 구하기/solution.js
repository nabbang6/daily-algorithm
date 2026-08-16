function solution(array) {
    var answer = 0;

    const set = new Set(array); // 배열의 중복 제거
    const arr = Array.from(set);
    const result = arr.map((i) => { return array.filter((element) => i === element).length; }); // 각 요소의 개수를 구함

    const max = Math.max(...result); // 최댓값을 구함 

    if (result.filter((i) => i === max).length > 1) { // 최댓값이 여러 개일 경우
        answer = -1;
    } else {
        answer = arr[result.indexOf(max)]; // 최댓값의 인덱스를 이용하여 해당 요소를 answer에 저장
    }

    return answer;
}