function solution(n) {
    var answer = 0;
    const arr = new Array();
    while (n > 0) {
        const result = n % 3;
        arr.push(result);
        n = Math.floor(n / 3);
    }
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i] * 3 ** i;
    }
  return answer;
}