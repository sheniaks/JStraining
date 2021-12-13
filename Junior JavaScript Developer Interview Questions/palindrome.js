function palindrome(str) {
str = str.toLowerCase();
// console.log(str);
// str = str.split('');
// console.log(str);
// str = str.reverse();
// console.log(str);
// str = str.join('');
// console.log(str);
console.log(str === str.split('').reverse().join(''));
}

palindrome('ana');          //true                  
palindrome('rest');         //false        
palindrome('Kayak');        //true