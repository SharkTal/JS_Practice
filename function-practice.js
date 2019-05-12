// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223	

// 

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?

// function string_reverse(str){
//     let string_reversed = str.split('').reverse().join('');
//     str == string_reversed ? console.log("The string is palindrome.") : console.log("The string is not palindrome.");
// }

// var str = "navy"
// string_reverse(str);


// shift method;
// function shiftArray(arr) {
//     // remove 1 item at 0-index position, return the deleted item 
//     return arr.splice(0, 1); 
//   }
  
//   var a = [1, 2, 3];
  
//   var b = a.shift();
  
//   console.log(a); // [2, 3]
  
//   console.log(b); // 1
  
//   var c = shiftArray(a);
  
//   console.log(a); // [3]
  
//   console.log(c); // [2]


// slice

// function check_Palindrome(str_entry){
//     var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
    
//     // check whether the string is empty or not
//         if(cstr === ""){
//             console.log("Nothing found !");
//              return false;
//         }

//         // check if the length of the string is even or odd
//             if((cstr.length) % 2 ===0){
//                 ccount = (cstr.length) /2;
//             }else {
//                 // If the length of string is 1 then it becomes a palindrome
//                 if(cstr.length ===1){
//                     console.log("Entry is a palindrom");
//                     return true;
//                 }else{
//                     // If the length of the string is odd ignor middle character
//                      ccount = (cstr.length - 1 ) / 2;
//                 }
//             }

//     // Loop through to check the first character to the last character and then move next
//             for(var x = 0; x < ccount; x++){
//             // Compare characters and drop them if they do not match
//                 if(cstr[x] != cstr.slice(-1-x)[x]){
//                     console.log("Entry is not a palindrome");
//                     return false;
//                 }
//             }
//             console.log("The entry is a palindrome");
//             return true;
// }

// check_Palindrome("nurses run");


// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

