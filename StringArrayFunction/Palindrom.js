function isWordPalindrome(word){
    let x =word
    let y =""
    for(let i = x.length-1;i>=0;i--){
        y=y+x.charAt(i)
    }
    console.log(y)
    if(y==x){
        return true
    }else{
        return false
    }
}

console.log(isWordPalindrome("malayalam"))

console.log(isWordPalindrome("deer"))