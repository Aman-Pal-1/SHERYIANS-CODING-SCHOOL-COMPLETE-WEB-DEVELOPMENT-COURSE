//          25 Mind-Blowing Practice Questions Master JavaScript.

// Ques 1 - give a string, reverse each word in the sentence 
// var str = "saare jahan se axcha hindustan hamara";
// var strarray = str.split(" ")
// .map(function (word){
//     return word.split("").reverse().join("")
// })
// console.log(strarray.join(" "));

// Question 2 - how to check if an object is an array or not? provide some code.
// function checkArray(elem){
// return(Array.isArray(elem));
// }
// console.log(checkArray([]));
// console.log(checkArray({}));

// Question 3 - how to empty an array in javascript ? do not reset it to a new array, and do not loop through to pop each value ?
// var arr = [1,2,3,4,5,6];
// arr.length = 0;

// Question 4 - how would you check if a number is an integer ? (not use isInteger)
// var a = 12;
// if (a%1 === 0){
//     console.log("interger");
// }
// else(
//     console.log("not an integer")
// )

// Question 5 - make this work--
// duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
// var a = [1,2,3,4,5]
// console.log(a.concat(a));

// //             or

// function duplicate(arr){
//       return (arr.concat(arr));
// }
// console.log(duplicate([1,2,3,4,5]));

//        functions ✅

// Question 6 - write a javascript function that reverse a number .
// function rev (num){
//     return Number( num.toString().split("").reverse().join(""))
// }
// console.log(rev(12));

//              or

// function reversefun (num){
//     var rev = 0;
//     while(num>0){
//         var rem = num%10;
//         rev = rev*10+rem;
//         num = Math.floor(num/10);
//     }
//     return rev ;
// }
// console.log(reversefun(1234))
// console.log(reversefun(478587))

// Question 7 - Write a JavaScript function that checks whether a passed string is palindrome or not ?
// function check (str){
//     var reversed = str.split("").reverse().join("")
//     if(reversed== str)return console.log("palendrome");
//     else return console.log("Not a Palendrome");
// }
// console.log(check("poop"));
// console.log(check("pool"));

// Question 8 - Write a JavaScript function that returns a passed string with letters in alphabetical order ?
// function order (str){
//     return str.split("").sort();
// }
// console.log(order("apple"));
// console.log(order("ball"));
// console.log(order("cat"));
// console.log(order("dog"));
// console.log(order("elephant"));
// console.log(order("fish"));
// console.log(order("girl"));

// Question 9 - write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case ?
// function capataliseKaro(str){
//     var allwords = str.split(" ").map(function(word){
//        return word.charAt(0).toUpperCase() + word.substring(1)
//     })
//    return allwords.join(" ");

// }
// console.log(capataliseKaro("Aman Bhai Kaise Ho"));

// Question 10 - Write a JavaScript function to get the number of occurrences of each letter in specified string ?
// function occ(str) {
//     var occurrences = {};
//     str.split("").forEach(function(elem){
//         if (occurrences.hasOwnProperty(elem) === false){ occurrences[elem] = 1;}
//         else {
//             occurrences[elem]++;
//         }
//     })
//     return occurrences;
// }
// console.log(occ("aman"));
// console.log(occ("apple"));

//           LOOPS ✅
