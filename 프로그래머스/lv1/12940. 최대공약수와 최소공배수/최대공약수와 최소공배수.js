function solution(n, m) {
    let answer = [];
    
    function gcd(n, m) {
        let a;
        while(m) {
            a = n % m;
            n = m;
            m = a;
        } return n;
    }
        
    function lcm(n, m) {
      return (n * m) / gcd(n, m);
    }
    
    return [gcd(n,m),lcm(n,m)]
}