// var browserVersion = "Chrome"

// function getBrowserVersion(){
    
//     if(browserVersion == "Chrome"){
//         let browserVersion = "Chrome let"
//         browserVersion ="firefox"
//         console.log(browserVersion)
        
//     }
//     console.log(browserVersion)
// }

// getBrowserVersion()
//printing odd number
// for(let i=1;i<=25;i+=2){
//     console.log(i)
// }

// function isWordPalindrome(word){
//     let x =word
//     let y =""
//     for(let i = x.length-1;i>=0;i--){
//         y=y+x.charAt(i)
//     }
//     console.log(y)
//     if(y==x){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(isWordPalindrome("malayalam"))

// console.log(isWordPalindrome("deer"))

let browser = "Chrome"

function checkBrowserVersion(callback){
    
    setTimeout(()=>{

    callback(browser) //is going to call done()
    // is going to call saveHistory
    },2000)
}

function done(browsername){
    
    console.log("browser name is " +browsername)
}

checkBrowserVersion(done)

