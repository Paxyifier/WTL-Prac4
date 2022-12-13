const process = require('process');

const multiTable = (num) => {
    for ( let i = 1; i <=10; i++ ) {
        console.log(num,"*",i,"=",num*i);
    }
}

const checkYear = year => {
    if ((year %100!==0 && year % 4 === 0)||year%400===0) {
        console.log("Is a leap Year!!");
        return;
    }
    console.log("Not a leap Year!!");
}

const checkPalindrome = (palindrome) => {
    var len = palindrome.length
    var half = Math.floor(len/2);
    for (let i = 0; i < half; i++) {
        if (palindrome[i]!== palindrome[len-1-i]) {
            console.log("Not a palindrome!!");
            return;
        }
    }
    console.log("Is a palindrome!!");
}

process.nextTick(multiTable,5);

setImmediate(checkYear,2004);

const intervalHandler = setInterval(checkPalindrome,500,"malayalam");

setTimeout(()=>{
    clearInterval(intervalHandler)
},600)

