function solution(a, b) {
    var answer = '';
    
    let day = new Date(2016, a-1, b);
    const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    answer = WEEKDAY[day.getDay()];
    
    return answer;
}