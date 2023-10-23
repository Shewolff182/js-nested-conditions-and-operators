/************************** Exercise 1 ***********************/

// Write a function that takes three numbers as arguments and returns the largest number among them. Do not use `Math.max`, though you're welcome to do so after you solve it using conditionals.
function largestNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
// Test it by calling the function with:

console.log(largestNumber(3, 6, 8));
console.log(largestNumber(5, 4, 10));
console.log(largestNumber(2, 7, 6));
console.log(largestNumber(200, 300, 150));
console.log(largestNumber(12, 11, 1));
console.log(largestNumber(130, -8, 18));

// Since this is a function that returns a value, you can save what calling it evaluates to in a variable and log that to the console.
//it didnt read this part before console logging everything

/************************** Exercise 2 ***********************/

let itemToBuy = "";
let savings = 100;
if (savings > 500) {
  itemToBuy = "Computer";
} else if (savings > 200) {
  itemToBuy = "Phone";
} else if (savings > 0) {
  itemToBuy = "Dinner";
} else {
  itemToBuy = "...still saving...";
}


// Based on the above code, what will be the value of itemToBuy after the code is run? 
// Write your guess below. 
//dinner
// How will you check your answer to be sure it is correct?
console.log(itemToBuy);


/************************ Exercise 3 *************************/

// Create a variable called time and set it equal to the time that the user answers when you ask "What time is it?"

// Create an if statement so that if the time is less than 10, the user will be greeted with a "Good Morning!" NOTE: You can use the 24 hours time method, also known as military time.
// If the time is less than 17 (5:00pm in 12-hour time), the user should be greeted by a "Good Afternoon!".
// If the answer is anything else, the user should be greeted by a "Good Evening!".

//code:
// let time = prompt("What time is it?");

// if (Number(time) < 10) {
//   alert("Good Morning!");
// }else if (Number(time) < 17) {
//   alert ("Good Afternoon!");
// } else ("Good Evening!");

/************************ Exercise 4 *************************/

// Review the following code: 
// code:
function isEligibleForSpecialDiscount(isNewUser, isFirstPurchase) {
  if (isNewUser && isFirstPurchase) {
    return true;
  } else {
    return false;
  }
}

let isNewUser1 = true;
let isFirstPurchase1 = true;
let isCustomer1Eligible = isEligibleForSpecialDiscount(isNewUser1, isFirstPurchase1);

// Write down your idea for the value of isCustomer1Eligible below, then log it to the console to check.
//true
console.log(isCustomer1Eligible);

let isNewUser2 = false;
let isFirstPurchase2 = true;
let isCustomer2Eligible = isEligibleForSpecialDiscount(isNewUser2, isFirstPurchase2);

// Write down your idea for the value of isCustomer2Eligible below, then log it to the console to check.
//false
console.log(isCustomer2Eligible);

/************************ Exercise 5 *************************/
//code:
// let age2 = prompt("How old are you?");
// let language = prompt("What is your favorite coding language?");

// function userCheck(age, lang) {
//   if (age > 18 && lang === "Javascript") {
//     console.log("Welcome Coder!");
//   } else {
//     console.log("No Entry Granted!");
//   }
// }

// userCheck(age2, language);


//comments:
// Uncomment the above code (and feel free to re-comment it again to avoid excessive prompts.)
// Create a conditional statement that checks if a user's age is greater than 18 and if their language is 'JavaScript'. If both are true, log a message to the console that says, "Welcome Coder!"

// Note that this variable is called `age2`, and don't check the previous `age` variable! (A production-level application would use scope to make sure we don't have to do that!)




/************************ Exercise 6 *************************/
//code:
let favDanceMove = prompt("What is your favorite dance move?");
let userAge = prompt("How old are you?");
let color = prompt("What is your favorite color?");
function userChecking(favDanceMove, userAge, color){
  if (userAge < 45 && favDanceMove === "The Robot" && color === "blue") {
    console.log("Welcome!");
  } else {
    console.log("Access Denied!");
  };
}
userChecking(favDanceMove, userAge, color);


//comments:
// Uncomment the above code (and feel free to re-comment it again to avoid excessive prompts.)
// Create a conditional statement that checks if a user's age is less than 45 and their favorite dance move is The Robot and their favorite color is blue. DON'T FORGET that all three prompts will evaluate to strings, NOT numbers!

// If all are true, log a message to the console that says, "Welcome!". If any of them are not true, log a message to the console that says 'Access Denied!'.



// Test it by inputting all 3 answers so the conditions are true, and then with only 1 or 2 true.

// Feel free to comment out the code once you solve the problem, so that you don't have too many prompts interfering with your flow!






/************************ Bonus Exercises *************************/


/************************ Exercise 7 *************************/
// code
function isEligibleForDiscount(isStudent, isSeniorCitizen) {
  if (isStudent || isSeniorCitizen) {
    return true;
  } else {
    return false;
  }
}

let isStudentParticipant = true;
let isSeniorParticipant = false;

// Review the above code. 
// Create a variable called isEligible1 and assign it the value of calling the isEligibleForDiscount with isStudentParticipant and isSeniorParticipant as arguments. 
// What is the value of isEligible1?
let isEligible1 = isEligibleForDiscount(isStudentParticipant, isSeniorParticipant);
//true
console.log(isEligible1);

let isStudentParticipant2 = false;
let isSeniorParticipant2 = true;
let isEligible2 = isEligibleForDiscount(isStudentParticipant2, isSeniorParticipant2);
console.log(isEligible2);
// What is the value of isEligible2?
//true
let isStudentParticipant3 = false;
let isSeniorParticipant3 = false;
let isEligible3 = isEligibleForDiscount(isStudentParticipant3, isSeniorParticipant3);
console.log(isEligible3);

// What is the value of isEligible3?
//false


/************************ Exercise 8 *************************/

function authenticateUser(username, password) {
  let validUsername = "john_doe";
  let validPassword = "secretpassword";

  if (username === validUsername && password === validPassword) {
    return "User authenticated.";
  } else {
    return "Invalid username or password.";
  }
}


  // Call the authenticateUser function. Pass in arguments that would return "User authenticated"
console.log(authenticateUser("john_doe", "secretpassword"));
  // Call the authenticateUser function. Pass in arguments that would return "Invalid username or password."
  console.log(authenticateUser("shan_wolff", "NOTsecretpassword"));



/************************ Exercise 9 *************************/

// Create a variable named busRunning and ask the user if the bus is running today.


// Create a second variable named passengerNum and ask the user how many passengers are currently on the bus.


// Create a conditional statement that says if the bus is running AND the bus has less than or equal to 75 passengers, the program should log to the console, "You can take the bus!"


// Otherwise, the user should get a logged message that says "You will have to wait."


/************************ Exercise 10 *************************/

// let cupcakesSold = Number(prompt("How many cupcakes were sold today?"));
// let profitMargin = 30;
// if (cupcakesSold < profitMargin) {
//   console.log("Gotta sell more!");
// } else {
//   console.log("We are doing well!!!");
// }

// Uncomment the above code (and feel free to re-comment it again to avoid excessive prompts.)

// Update the code to add the following condition: If the cupcakes sold and the profit margin are equal, the user should see a log in the console: "We broke even!"



/************************** Exercise 11 ***********************/

// let age = 16;

// if (age >= 16) {
//   console.log("You can get your driver's license.");
// } else {
//   console.log("You can't get your driver's license or vote yet.")
// }

// if (age >= 18) {
//   console.log("You can vote.");
// } else {
//   console.log("You can't yet vote.");
// }

// PART 1

// Test out the code above by changing the value we gave `age` to see if you can get all four messages.

// Note that if we set the age to under 16, we get the message that they can't vote twice. This is because we know if they're under 16 that they can't do both (which is why the second message say they can't do either), but because the conditions are separate, we're checking again anyway.

// ONE WAY to fix this is by nesting the if statements. (The other is combining the conditions with logical operators.)

// Follow these steps to nest the if statements.

// 1. Remove the `else` statement for the second `if` statement. Don't forget to leave the `if` statement's closing curly bracket!

// 2. Move the second `if` statement, with its condition and code block, directly into the first `if` statement's code block, right under the first console log.

// Now try running the code again with an age under 16.


// Your final version could look something like this (but don't copy-paste, write the code yourself!)

// let age = 50;

// if (age >= 16) {
//   console.log("You can get your driver's license.");
//   if (age >= 18) {
//     console.log("And you can vote.");
//   } else {
//     console.log("But you can't yet vote.");
//   }
// } else {
//   console.log("You can't get your driver's license or vote yet.")
// }

// Now, guess what will happen with each of the 3 possibilities, write it down below, and then run the code to see what actually happens!

// What will happen with an age of 5?

// What will happen with an age of 17?

// What will happen with an age of 20?

  /************************ Exercise 12 *************************/
function calculateTotalPrice(quantity, unitPrice) {
  let subtotal = quantity * unitPrice;
  let total;
  let discountPercentage;

  if (quantity >= 10) {
    // Apply 10% discount for purchasing 10 or more items
    discountPercentage = 10;
  } else if (quantity >= 5) {
    // Apply 5% discount for purchasing 5 to 9 items
    discountPercentage = 5;
  } else {
    // No discount for purchasing less than 5 items
    discountPercentage = 0;
  }

  if (subtotal >= 100) {
    // Apply an additional 20% discount for a subtotal of $100 or more
    discountPercentage += 20;
  }

  let discountAmount = (subtotal * discountPercentage) / 100;
  total = subtotal - discountAmount;

  return total.toFixed(2);
}
  
  // Call calculateTotalPrice so that no discount is applied. 



  // Call calculateTotalPrice so that a 5% discount is applied.

/************************ Exercise 13 *************************/

function getWeatherForecast(location) {
  let defaultLocation = "New York";
  let defaultForecast = "Partly cloudy with a chance of showers";

  let selectedLocation = location || defaultLocation;

  return `Weather forecast for ${selectedLocation}: ${defaultForecast}`;
}

// Call the getWeatherForecast with no arguments. What is the output?





// Call the getWeatherForecast with userLocation1 as the argument. What is the output?
let userLocation1 = "Los Angeles";
