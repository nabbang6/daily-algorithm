# Array.from() 정리

## 기본 문법

```js
Array.from(arrayLike, mapFn);
```

| 인자        | 설명                                              |
| ----------- | ------------------------------------------------- |
| `arrayLike` | 배열로 변환할 대상 (이터러블 또는 유사 배열 객체) |
| `mapFn`     | (선택) 각 요소에 적용할 변환 함수                 |

---

## 첫 번째 인자: `{ length: s }`

JavaScript에서 배열처럼 동작하는 **유사 배열 객체(array-like object)**는
`length` 프로퍼티만 있으면 `Array.from()`이 배열로 변환해준다.

```js
Array.from({ length: 3 });
// → [undefined, undefined, undefined]
```

`{ length: s }`는 길이가 `s`인 빈 슬롯 배열을 만들기 위한 트릭이다.

### `new Array(n)`과 차이점

```js
const a = new Array(3);
// → [ <3 empty items> ]  ← 실제로 비어있는 슬롯 (map/forEach 불가)

const b = Array.from({ length: 3 });
// → [undefined, undefined, undefined]  ← undefined로 채워짐 (map/forEach 가능)

a.map((_, i) => i); // → [ <3 empty items> ]  ← 동작 안 함!
b.map((_, i) => i); // → [0, 1, 2]             ← 정상 동작
```

`new Array(n)`으로 만든 배열은 빈 슬롯이라 `map`, `forEach`가 건너뛰어 버린다.
`Array.from({ length: n })`은 `undefined`로 채워지므로 정상적으로 순회된다.

---

## 두 번째 인자: 매핑 함수 `(_, i) => ...`

두 번째 인자는 배열의 각 요소를 변환하는 함수로,
`Array.map()`의 콜백과 동일한 형태다.

```js
Array.from({ length: n }, (currentValue, index) => { ... })
```

### `_` 의 의미

`_`는 **사용하지 않는 인자**라는 관례적 표기다.

```js
Array.from({ length: 3 }, (_, i) => i * 2);
//                          ↑   ↑
//                          |   인덱스 (0, 1, 2)
//                          현재 값 (undefined이라 쓸 일 없음 → _ 로 표기)

// → [0, 2, 4]
```

`{ length: n }`으로 만든 배열의 각 요소는 `undefined`라서,
현재 값은 필요 없고 인덱스만 쓰는 경우가 대부분이다.

---

## 가위바위보 코드 해석

```js
Array.from({ length: s }, (_, i) => {
  return result[(arr1[i] - arr2[i] + 3) % 3];
});
```

단계별로 풀어보면:

```
1. { length: s }        → 길이 s인 배열 생성 (값은 모두 undefined)
2. (_, i) => { ... }   → 각 인덱스 i에 대해 변환 함수 실행
3. result[...]          → 모듈러 연산 결과로 'D'/'A'/'B' 선택
4. 최종 반환값          → 변환된 값들로 채워진 새 배열
```

`for` 루프와 완전히 동일한 동작:

```js
// for 루프 방식
const answer = [];
for (let i = 0; i < s; i++) {
  answer.push(result[(arr1[i] - arr2[i] + 3) % 3]);
}

// Array.from 방식 (동일한 결과)
const answer = Array.from({ length: s }, (_, i) => {
  return result[(arr1[i] - arr2[i] + 3) % 3];
});
```

---

## 다양한 활용 예시

### 0부터 n-1까지 숫자 배열

```js
Array.from({ length: 5 }, (_, i) => i);
// → [0, 1, 2, 3, 4]
```

### 1부터 n까지 숫자 배열

```js
Array.from({ length: 5 }, (_, i) => i + 1);
// → [1, 2, 3, 4, 5]
```

### 2차원 배열 초기화

```js
Array.from({ length: 3 }, () => new Array(3).fill(0));
// → [[0,0,0], [0,0,0], [0,0,0]]
```

### 문자열을 배열로

```js
Array.from('hello');
// → ['h', 'e', 'l', 'l', 'o']
```

### Set/Map을 배열로

```js
Array.from(new Set([1, 2, 2, 3]));
// → [1, 2, 3]
```

---

## 요약

```
Array.from({ length: n }, (_, i) => 변환식)
         ↑                  ↑   ↑
         n개짜리 배열 생성   │   현재 인덱스
                            현재 값 (undefined, 무시)
```

- `{ length: n }` → `new Array(n)` 대신 쓰는 이유: `map`/`forEach` 안전하게 사용 가능
- `_` → 사용하지 않는 인자임을 명시하는 관례
- 전체적으로 **"n개짜리 배열을 인덱스 기반으로 채운다"** 는 패턴
