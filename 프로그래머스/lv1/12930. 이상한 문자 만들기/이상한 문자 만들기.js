function solution(s) {
    let answer = '';
 
    s.split(' ').forEach((el) => { // 공백 기준으로 단어를 배열에 넣고
        el.split('').forEach((word, idx) => {
            if (idx % 2 === 0) {
                answer += word.toUpperCase();
            } else {
                answer += word.toLowerCase();
            }
        })
        answer += " " // 한 단어의 반복문이 끝났을 때 공백 넣고
    })
    
    return answer.slice(0, -1); // 마지막 공백만 slice로 잘라주기
}