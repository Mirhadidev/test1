// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let sum = Number(num1) + Number(num2);
//  alert("The sum is: " + sum);


//  let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let sub = Number(num1) - Number(num2);
//  alert("The sub is: " + sub);

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let mul = Number(num1) * Number(num2);
//  alert("The mul is: " + mul);
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let div = Number(num1) / Number(num2);
//  alert("The mul is: " + div);

// let age1=prompt("enter age1");
// let age2=prompt("enter age2");
// let age3=prompt("enter age3");
// let age4=prompt("enter age4");
// let age5=prompt("enter age5");
// let age6=prompt("enter age6");
// let age7=prompt("enter age7");
// let age8=prompt("enter age8");
// let age9=prompt("enter age9");
// let age10=prompt("enter age10");
// let sum= Number(age1)+Number(age2)+Number(age3)+Number(age4)+Number(age5)+Number(age6)+Number(age7)+Number(age8)+Number(age9)+Number(age10);
// console.log(sum)
// let avg=Number(sum)/10;
// console.log("the avg is=" + avg);

// let raduis=prompt("raduis");
// let diameter=Number(raduis)*2;
// console.log(diameter);

// let rad=prompt("enter raduis");
// const pi="3.14";
// let circum=2*Number(pi)*Number(rad);
// console.log(circum);

//  let rad=prompt("enter raduis");
//  const pi="3.14";
//  let area=Number(pi)*Number(rad)*Number(rad);
// console.log(area);

// let weight=prompt("enter weight in kg");
// let height=prompt("enter height");
// let m=prompt("enter m");
// let bmi=Number(weight) /( Number(height)*Number(height)*Number(m)*Number(m));
// console.log(bmi);



// Function to prompt for input 
// let numberStr = prompt("Please enter a four-digit integer:");
// let number = parseInt(numberStr);

// //Ensure the input is a 4-digit number for the logic to work correctly
// //streing is just text like"123" & like "hello"
// //parseInt("123") takes a string in it & Tries to turn it into a whole number (integer)
//     let digit1 = number % 10;
//     number = Math.floor(number / 10); // Use Math.floor for integer division in JS

//     let digit2 =  number % 10;
// number = Math.floor(number / 10);

//     let digit3 = number % 10;
//     number = Math.floor(number / 10);

//     let digit4 = number % 10;
    
//     // Displaying the digits
//     console.log("The digits in reverse order are: " + digit1 + ", " + digit2 + ", " + digit3 + ", " + digit4);

// const basePrice = 4.50;
// const salesTaxRate = 0.08;
// let totCappuccinos = 3;
// const eliteMembership= true;
// const subtotal = Number(basePrice)* Number(totCappuccinos);
// console.log(subtotal);
// // To view the result:
// // console.log(subtotal); // Output: 13.5


// let curentTemp=72.5;
// let targetTempToHold=68;
// const acRunning= false;
// const acSetToEcoMode= true;
// currentTemp=74;
// //well the last output is extra but just for check on browser/console
// console.log(currentTemp);

// let maxHealth = 1000;
// let currentHealth = 850;
// let isShieldActivated = true;
// let isPoisoned = false;
// let incomimgDamage=150;
// currentHealth=currentHealth -incomimgDamage;
// console.log(currentHealth);

//assignment python cart it can be done with basic javascript

// console.log("Welcome to our shop");
// let itemBuying=prompt("What is the name of the item you are buying:");
// let priceOfItem=Number(prompt("Price of item you are buying:"));
// let quantityPurchasing=Number(prompt("How much quantity you want to purchase"));
// console.log(`The subtotal is= ${priceOfItem * quantityPurchasing}`);

//assignment 10
// WORK AS SAME CASES WITHER USE , OR && WITH AND ONLY T OR F WILL SHOWED AND WITH THE T ONCE THE OUTPUT WILL PRINT AS WELL THE STRING
// WITH , THE FALSE OUTPUT Will also be should completely to means both statments will work anyways wether true or false
// let tweet=prompt("Enter your tweet");
// let len=tweet.length;
// console.log(len<=140 && `your ${len} char tweet will work`);
// console.log(len>140 &&`your ${len} char tweet is ${len-140} char too long`);


// another way 
// let tweet=prompt("Enter your tweet");
// let len=tweet.length;
// if(len<=140)
// {
//     console.log(`your ${len} char tweet will work`);
// }
// else
// {
//     console.log(`your ${len} char tweet is ${len-140} char too long`);
// }

// assignment 11

// let currentAge=Number(prompt("enter your current age"));
// let yearsLeft=90-currentAge;
// let weeksLeft=yearsLeft*52;
// console.log(`you have ${weeksLeft} weeks left`);

//assignmet 12
// let age=parseInt(prompt("pls enter your age"));
// alert(age);
// if (age < 18) {
//   alert("Sorry, you are too young to drive this car. Powering off");
// } else if (age === 18) {
//   alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else {
//   alert("Powering On. Enjoy the ride!");
// }

//assignment 12
// let weightInPounds=Number(prompt("enter weight in pounds"));
// Math.abs(weightInPounds);
// let heightInInches=Number(prompt("enter height"));
// Math.abs(heightInInches);
//     // formula: (weight * 703) / (height * height)
//     const bmi = (weightInPounds * 703) / (heightInInches * heightInInches);
//     if (bmi < 16.0) {
//         console.log(` your bmi of ${bmi} makes you Severely Underweight`);
//     } else if (bmi >= 16.0 && bmi <= 18.4) {
//         console.log(` your bmi of ${bmi} makes you Underweight`);
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         console.log(` your bmi of ${bmi} makes you normal`);
//     } else if (bmi >= 25.0 && bmi <= 29.9) {
//   console.log(` your bmi of ${bmi} makes you Severely overweight`);
//     } else if (bmi >= 30.0 && bmi <= 34.9) {
//         console.log(` your bmi of ${bmi} makes you moderately obese`);
//     } else if (bmi >= 35.0 && bmi <= 39.9) {
//        console.log(` your bmi of ${bmi} makes you Severely obese`);
//     } else {
//         console.log(` your bmi of ${bmi} makes you morbidly obese`);
//     }

//assignmet 13


// let size =prompt("Pls enter size of pizza S,M or L:");        // S, M, or L
// let addPepperoni =prompt("add pepperoni Y for yes or N for No");   // Y or N
// let extraCheese =prompt("add cheese Y for yes or N for No");    // Y or N
// size=size.toUpperCase();
// extraCheese=extraCheese.toUpperCase();
// addPepperoni=addPepperoni.toUpperCase();
// let bill = 0;

// // Pizza size price
// if (size === "S") {
//   bill = 15;
// } else if (size === "M") {
//   bill = 20;
// } else if (size === "L") {
//   bill = 25;
// }

// // Pepperoni price
// if (addPepperoni === "Y" && size === "S")
// {
//   bill += 2;
// } else if (addPepperoni === "Y" && (size === "M" || size === "L")) {
//   bill += 3;
// }

// // Extra cheese price
// if (extraCheese === "Y") {
//   bill += 1;
// }

// console.log("Thank you for choosing Python Pizza Deliveries!");
// console.log(`your final bill is $ ${bill}`);
// assignmemt 14

// let ch = "this is east wall";
// let encrypted = "";

// if (ch === "a") encrypted = "b";
// else if (ch === "b") encrypted = "c";
// else if (ch === "c") encrypted = "d";
// else if (ch === "d") encrypted = "e";
// else if (ch === "e") encrypted = "f";
// else if (ch === "f") encrypted = "g";
// else if (ch === "g") encrypted = "h";
// else if (ch === "h") encrypted = "i";
// else if (ch === "i") encrypted = "j";
// else if (ch === "j") encrypted = "k";
// else if (ch === "k") encrypted = "l";
// else if (ch === "l") encrypted = "m";
// else if (ch === "m") encrypted = "n";
// else if (ch === "n") encrypted = "o";
// else if (ch === "o") encrypted = "p";
// else if (ch === "p") encrypted = "q";
// else if (ch === "q") encrypted = "r";
// else if (ch === "r") encrypted = "s";
// else if (ch === "s") encrypted = "t";
// else if (ch === "t") encrypted = "u";
// else if (ch === "u") encrypted = "v";
// else if (ch === "v") encrypted = "w";
// else if (ch === "w") encrypted = "x";
// else if (ch === "x") encrypted = "y";
// else if (ch === "y") encrypted = "z";
// else if (ch === "z") encrypted = "a";
// else encrypted = ch;
// console.log(encrypted);



//assignment 13
// let str="this is a book i like the most of all";

// let reversed = str.split("").reverse().join("");


// console.log(reversed); 


//assignment 14

// let a = Number(prompt("Enter first side"));
// let b = Number(prompt("Enter second side"));
// let c = Number(prompt("Enter third side"));

// if (a <= 0 || b <= 0 || c <= 0) {
//     console.log("Invalid triangle: sides must be positive");
// }
// else if (a + b > c && a + c > b && b + c > a) {
//     console.log("Valid triangle");
// }
// else {
//     console.log("Invalid triangle");
// }

//assignment 15

// let alphabet =prompt("enter a alphabet from A to Z:");
// switch (alphabet) {
//    case "a":
//     case "A":
//     console.log("vowel");
//     break;
//   case "e":
//     case "E":
//     console.log("vowel");
//     break;
//  case "i":
//     case "I":
//     console.log("vowel");
//     break;
//  case "o":
//     case "O":
//     console.log("vowel");
//     break;
//   case "u":
//     case "U":
//     console.log("vowel");
//     break;
//   default:
//     console.log("It is a consonant");
//     break;
// }

//assignmet 16

// let a = Number(prompt("Enter first side"));
// let b = Number(prompt("Enter second side"));
// let c = Number(prompt("Enter third side"));



// if (a>0 && b>0 && c>0) {
//      if (a + b > c && a + c > b && b + c > a)
//     { 
//             if(a==b && b==c && a==c)
//             {
//              console.log("it is equaliteral traingle");
//             }
//         else if(a==b || b==c || c==a)
//             {
//             console.log("isolsecs traingle");
//             }
//         else
//            {
//             console.log(`scalene traingle`);
//            }
//     }
// }
//     else
//     {
//    console.log("Invalid triangle: sides must be positive");
//     }
   
//assignmet 17
// console.log("Twinkle, twinkle, little star,\n \tHow I wonder what you are!\n \t\tUp above the world so high,\n\t\tLike a diamond in the sky.\n Twinkle, twinkle, little star,\n \tHow I wonder what you are" )


//asignmet 18

// let n="5";
// let nn=n+n;
// let nnn=n+n+n;
// let result=Number(n)+Number(nn)+Number(nnn);
// console.log(`expected rseult: ${result}`);

// assignment 19
// let currentAge=Number(prompt("Enter your current Age eg 18 etc"));
// let year= Number(prompt("enter current year eg 2026:"));
// let age100=100-currentAge;
// let yearLeft=year+age100;
// console.log(`Years left you have till age 100: ${age100} years`);
// console.log( `Years when you will be 100years old=${yearLeft}`);

//assignmet 20

// let a = prompt("Enter names separated by commas").split("");
// console.log(a);
// alert(a[Math.floor(Math.random() * a.length)]);


// Step 1: Take input from user
// let input = prompt("Enter friends names separated by commas (e.g. ali,bilal,ahmed,jawad,sheik)");
// let friends=input.split(",");
// let randomIndex = Math.floor(Math.random() * friends.length);
// console.log(`${friends[randomIndex].trim()} will give the party`);


//assignmet 21

// let year=Number(prompt("Enter year eg 2004,2005,1990,..2026:"));
// if( year%4===0)
// {
//     console.log(`${year} it is leap year`);
// }
// else
// {
//     let nextLeap = year + (4 - year % 4);
//     console.log(`Next leap year will be in ${nextLeap}`);
//     console.log(`${year} not a leap year`);
// } 



//assignmet 22


// let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]; // change this number from 1 to 30 manually
// let n= trying something new i was 

// let n=1;
// if (n % 3 === 0 && n % 5 === 0) {
//     console.log("fizzbuzz");
// } else if (n % 3 === 0) {
//     console.log("fizz");
// } else if (n % 5 === 0) {
//     console.log("buzz");
// } else {
//     console.log(n);
// }
//  n = 2;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);

// n = 3;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);
// n = 4;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);
// n = 5;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);
// n = 6;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);
// n = 7;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);
// n = 8;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);
// n = 9;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);
// n = 10;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);
// n = 11;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);
// n = 12;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);
// n = 13;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);
// n = 14;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);
// n = 15;
// if (n % 3 === 0 && n % 5 === 0) console.log("fizzbuzz");
// else if (n % 3 === 0) console.log("fizz");
// else if (n % 5 === 0) console.log("buzz");
// else console.log(n);


// // Step 1: Take input from user
// let input = prompt("Enter friends names separated by commas (e.g. a,b,c,d,e)").split(",");
// let friends=[]
// // Step 2: Convert string to array
// // let friends = input;

// // Step 3: Generate random index
// let randomIndex = Math.floor(Math.random() * input.length());

// // Step 4: Output result
// console.log(input[randomIndex].trim() + " will give the party 🎉");



// let year=Number(prompt("Enter any year eg 2004,..2026:"));
// if( year%4===0)
// {
//     document.write(`${year} it is leap year`);
// }
// else
// {
//     let nextLeap = year + (4 - year % 4);
//     document.write(`Next leap year will be in ${nextLeap} \n`);
//     document.write(`\n ${year} not a leap year`);
// } 

// script.js
let year = Number(prompt("Enter a year"));
let resultText;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  resultText = year + " is a Leap Year";
} else {
  resultText = year + " is NOT a Leap Year";
}

document.getElementById("result").innerText = resultText;


 
