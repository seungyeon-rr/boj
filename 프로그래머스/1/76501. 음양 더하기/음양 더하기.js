function solution(absolutes, signs) {
    let minusSum = 0;
    let plusSum = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === false) {
            minusSum += absolutes[i] * -1;
        } else {
            plusSum += absolutes[i];
        }
    }
    answer = minusSum + plusSum;
    
    return answer;
}