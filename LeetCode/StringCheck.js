
//check palindrome or not in javascript

function Palindrome(str) {
    let check = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            check = true;

        }
    }
    if (check) {
        return true;
    }
    else {
        return false;
    }
    // return check ? true : false;
}

const str = "osama";
const res = Palindrome(str);




