function launchBrowser(browserName){
    let name = browserName
    if(name=="Chrome"){
        console.log("BrowserName is "+name)
    }else if(name=="firefox"){
        console.log("Browser is "+name)
    }else{
        console.log("its a different Browser")
    }
}

function testType(testType){
    let type = testType

    switch(type){
        case "smoke":
            console.log("Its a Smoke Test")
            break
            case "sanity":
                console.log("Its a sanity Test")
                break
                case "regression":
                    console.log("Its a Regression Test")
                    break;
                    default:
                        console.log("smoke")
    }
                
}

launchBrowser("Chrome")

testType("smoke")