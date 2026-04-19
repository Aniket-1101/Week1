function numberType(num){
    let x = num
    if(x>0){
        return x +" is a positive number"
    }else if(x<0){
        return x +" is a negative number"
    }else{
        return x +" is zero or neutral"
    }
}

console.log(numberType(2))

console.log(numberType(-34))

console.log (numberType(0))