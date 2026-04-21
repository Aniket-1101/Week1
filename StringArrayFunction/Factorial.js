function factorial(n) {
    let result = 1
    if (n < 0) {
        console.log("Factorial is not defined for negative numbers.")
        
    }

    
    if (n === 0 || n === 1) {
        result = 1
    }

    
    if(n>2){
        for (let i = 2; i <= n; i++) {
        result *= i // Multiply result by each integer from 2 up to n
        }
    }

    return result
}

console.log(factorial(-3))
console.log(factorial(1))
console.log(factorial(4))