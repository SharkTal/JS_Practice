// var x = 3;
// var y = 2;
// x = y * x;
// x = x * y;
// console.log(x);

// var i = 1;
// while(i <=3){
//   console.log(i);
//   i = i + 1;
// }

// for (var i = 1; i <=3; i++){
//     console.log(i);
// }

// q5

// var i = 1;
// while(i < 9){
//     i = i +3;
// }
// console.log(i);

// q 6

// var i = 9;
// while(i > 4 ){
//     i = i -2;
// }

// console.log(i);

// q7


// for (var i = 4; i >= 3; i--){
//     console.log(i * 2);
// }

// console.log(i);

// q8 

// for(let i = 50; i <= 3333; i++){
//     console.log(i);
// }

// q9
// let sum = 0;
// for (let i = 100; i <= 2000; i++){
//     sum = sum + i;
//     console.log(i);
// }

// console.log(sum);

// wrong answer below
// let i = 100;

// for ( i = 100; i <= 2000; i++){
//     i = i + 1;
// }

// console.log(i);

// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor 
// Sample Output : 
// "0 is even" 
// "1 is odd" 
// "2 is even" 

// for(let i = 0 ; i <= 15; i++){
//     if ( i === 0 ){
//       console.log(i + " is even");
//     }else if (i % 2 === 0){
//       console.log(i + " is even");
//     }else{
//       console.log(i + " is odd");
//     }
//   }

//   6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade

// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// var avgmarks = 0;

// for ( var i = 0; i < students.length; i++){
//     avgmarks += students[i][1];
//     var avg = (avgmarks/students.length).toFixed(0);
// }

// console.log("Average grade: " + avg);

// for(var i = 0; i < students.length; i++){
//     if(students[i][1]< 60){
//         console.log("Score is " + students[i][1] +", Range < 60, Grade is F");
//     }else if( students[i][1]< 70 && students[i][1] >= 60){
//         console.log("Score is " + students[i][1] +", Range < 70, Grade is D");
//     }else if(students[i][1]< 80 && students[i][1] >= 70){
//         console.log("Score is " + students[i][1] +", Range < 80, Grade is C");
//     }else if (students[i][1] < 90 && students[i][1] >= 80){
//         console.log("Score is " + students[i][1] +", Range < 90, Grade is B");
//     }else if(students[i][1] < 100 && students[i][1] >= 90){
//         console.log("Score is " + students[i][1] +", Range < 100, Grade is A");
//         } 
//     }

// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// for (let i = 1 ; i <= 100; i++){
     
//     if( i % 3 ===  0 && i % 5 ===0){
//         console.log(i + " FizzBuzz");
//     }else if(i % 3 === 0){
//         console.log(i +  " Fizz");
//     }else if( i % 5 ===0 ){
//         console.log(i + " Buzz");
//     }else {
//         console.log(i);
//     }

// }

// 8. According to Wikipedia a happy number is defined by the following process : 
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)". 
// Write a JavaScript program to find and print the first 5 happy numbers.

// 9. Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor 
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 

// function three_digits_armstrong_n(){
//     for(var x = 1; x <10 ; ++x){
//         for(var y = 0; y < 10; ++y){
//             for(var z = 0; z < 10; ++z){
//                 var pow = (Math.pow(x,3)+ Math.pow(y,3) + Math.pow(z,3));
//                 var armstrong = (x*100 + y * 10 + z);
//                     if( pow == armstrong){
//                         console.log(pow);
//                     }
//             }

//         }
//     }
// }
// three_digits_armstrong_n();

// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// var x, y;
// var chr = "";
// for ( var x = 1; x <= 6 ; x++){
//     for( var y = 0; y < x ; y++){
//         chr = chr + ("*");
//     }
//     console.log(chr);
//     chr = '';
// }

// x y chr console.log chr
// 1 0 *    *           -
// 2 0 *                        
// 2 1 **   **          -
// 3 0 *
// 3 1 **
// 3 2 ***  ***         -

// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

// var x, y,GCD;

// function G_C_D(x,y){
//     for (var i = 1; i < x; i++){
//         if(x % i === 0 && y % i ===0){
//             GCD= i;
//         }  
//     } 
//     console.log(GCD);
// }

// G_C_D(1000,2000);


// 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.


var sum = 0;

function sumOfMultiples(){
    for(let i = 1; i < 1000; i++){
        i % 3 === 0 || i % 5 === 0 ? sum += i : console.log(i);
        // console.log(i);
    }
    return sum;
}

console.log(sumOfMultiples());

