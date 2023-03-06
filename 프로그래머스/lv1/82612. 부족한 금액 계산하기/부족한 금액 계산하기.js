function solution(price, money, count) {
    var answer = -1;
    var total = 0;
    
    for (i=1; i <= count; i++) {
        total += price*i;
    }
    
    if (money - total > 0) {
        return answer = 0
    } else {
        return answer = Math.abs(money - total)
    }
}