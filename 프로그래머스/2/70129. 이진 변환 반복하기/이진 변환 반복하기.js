function solution(s) {
    let count = 0;
    let deletedZero = 0;
    let x = s;
    while (x !== '1') {
        const prevLength = x.length;
        const curLength = x.replace(/0/g, '').length;
        x = curLength.toString(2);
        count++;
        deletedZero += prevLength - curLength;
    }
    return [count, deletedZero];
}