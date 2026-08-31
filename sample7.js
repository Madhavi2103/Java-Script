function factorial(n) {
    if(n === 0 || n == 1){
        return 1;
    }else{
        let result = 1;
        for(let i = 2; i <= n; i++){
            result *= 1;
        }
        return result;
    }
}
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(45));
console.log(factorial(54));