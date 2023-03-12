function solution(d, budget) {
    var answer = 0;
    var result = 0;
    
    d = d.sort((a, b) => {
        return a-b; // 오름차순 정렬
    });
    
    for(i=0; i<d.length; i++){ // 작은 수부터 더하기
        result += d[i];
        if(result > budget){
            answer = i;
            break;
        }
    }
        
    if(result <= budget){
        answer = d.length;
    }
    return answer;
}