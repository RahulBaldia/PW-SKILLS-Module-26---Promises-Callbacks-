function manipulateString(str) {
    
    const manipulatedStr = str.toUpperCase();

    
    function logString() {
        console.log("The manipulated string is: " + manipulatedStr);
    }

    return logString;
}


const logResult = manipulateString("hello world");
logResult();  
