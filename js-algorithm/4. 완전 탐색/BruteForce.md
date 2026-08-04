## 완전탐색

- 가능한 모든 경우의 수를 하나씩 확인해서 답을 찾는 방식
- 알고리즘 최적화 없이 다 확인하는 접근법

### 1. 단순 반복문 방식

- 모든 (i, j) 쌍을 확인
- 배열에서 두 수의 합이 target이 되는 쌍을 찾는 문제

```
function twoSumBruteForce(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(twoSumBruteForce([2, 7, 11, 15], 9)); // [0, 1]
```

### 2. 재귀를 이용한 완전탐색 (부분집합, 조합)

- 경우의 수가 트리 형태로 뻗어나갈 때 유용
- 배열의 모든 부분집합을 구하는 경우

```
function getSubsets(arr) {
  const result = [];

  function backtrack(index, current) {
    if (index === arr.length) {
      result.push([...current]);
      return;
    }
    // 현재 원소를 포함하지 않는 경우
    backtrack(index + 1, current);
    // 현재 원소를 포함하는 경우
    current.push(arr[index]);
    backtrack(index + 1, current);
    current.pop(); // 백트래킹
  }

  backtrack(0, []);
  return result;
}

console.log(getSubsets([1, 2, 3]));
// [[], [3], [2], [2,3], [1], [1,3], [1,2], [1,2,3]]
```
