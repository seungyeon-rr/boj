function solution(s, n) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = lower.toUpperCase();
    let lowerArr = lower.split('');
    let upperArr = upper.split('');
    let arrIdx = [];
    let answer = [];

  for(let i = 0; i < s.length; i++) {
    if(s[i] === ' ') {
      arrIdx.push(' ');
    } else if(s[i] === s[i].toLowerCase()){
      arrIdx.push(lowerArr.indexOf(s[i]));
    } else {
      arrIdx.push(upperArr.indexOf(s[i]));
    }
  }

  let plusIdx = arrIdx.map(x => (x + n) % lowerArr.length);

  for(let i = 0; i < arrIdx.length; i++) {
    if(arrIdx[i] === ' ') {
      answer.push(' ');
    } else if(s[i]===s[i].toLowerCase()) {  
      answer.push(lowerArr[plusIdx[i]]);
    } else {
      answer.push(upperArr[plusIdx[i]]);
    }
  }
  return answer.join('');
}