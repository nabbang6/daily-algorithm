// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어질 때 
// 이 세 막대로 삼각형을 만들 수 있으면 "YES", 만들 수 없으면 "NO" 출력
// !! 제일 긴 변의 길이가 다른 두 변의 합보다 커야 함 !! 

function createTriangle(a, b, c) {
    let longest;
    if ((a < b) && (c < b)) {
        longest = b;
        if (longest < a + c) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
    else if ((b < a) && (c < a)) {
        longest = a;
        if (longest < b + c) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
    else {
        longest = c;
        if (longest < b + a) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }

    console.log(longest);
}

createTriangle(6, 7, 11);

// 풀이 

function solution(a, b, c) {
    let answer = "YES", max;
    let sum = a + b + c;
    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;

    if ((sum - max) <= max) answer = "NO";
    return answer;
}

solution(13, 33, 17);