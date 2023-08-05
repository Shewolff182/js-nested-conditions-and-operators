/************************ Exercise 1 *************************/

let cupcakesSold = Number(prompt("How many cupcakes were sold today?"));   
const profitMargin = 30;
if ( cupcakesSold < profitMargin ) {
  alert("Gotta sell more!");
} else {
  alert("We are doing well!!!");
}

// Update the following code to add the following condition: If the cupcakes sold and the profit margin are equal, the user should be alerted "We broke even!"





/************************ Exercise 2 *************************/

// Create a variable called time and set it equal to the time that the user answers when you ask “What time is it?”

// Create an if statement so that if the time is less than 10, the user will be greeted with a “Good Morning!” NOTE: You can use the 24 hours time method, also known as military time.

// If the time is less than 20, the user should be greeted by a “Good Afternoon!”.

// If the answer is anything else, the user should be greeted by a “Good Evening!”.









/************************ Exercise 3 *************************/

// Review the following code: 

function isEligibleForSpecialDiscount(isNewUser, isFirstPurchase) {
    if (isNewUser && isFirstPurchase) {
      return true;
    } else {
      return false;
    }
  }
  
  const isNewUser1 = true;
  const isFirstPurchase1 = true;
  const isCustomer1Eligible = isEligibleForSpecialDiscount(isNewUser1, isFirstPurchase1);
  
  // What is the value of isCustomer1Eligible? 
  
  const isNewUser2 = false;
  const isFirstPurchase2 = true;
  const isCustomer2Eligible = isEligibleForSpecialDiscount(isNewUser2, isFirstPurchase2);
  console.log(`Customer 2 is eligible for special discount: ${isCustomer2Eligible}`); 
  
// What is the value of isCustomer2Eligible? 


/************************ Exercise 4 *************************/

const age = prompt("How old are you?");
const language = prompt("What is your favorite coding language?");

// Create a conditional statement that checks if a user's age is greater than 18 and if their language is 'JavaScript'. If both are true, create an alert that says, "Welcome Coder!"




/************************ Exercise 5 *************************/

const favDanceMove = prompt("What is your favorite coding language?");
const userAge = prompt("How old are you?");
const color = prompt("What is your favorite color?");

// Create a conditional statement that checks if a user's age is less than 45 and if their favorite dance move is The Robot and their favorite color is blue. 
// If all are true, create an alert that says, "Welcome!". If the condition evaluates to false, create an alert that says 'Access Denied!'.







/************************ Exercise 6 *************************/

function isEligibleForDiscount(isStudent, isSeniorCitizen) {
  if (isStudent || isSeniorCitizen) {
    return true;
  } else {
    return false;
  }
}

const isStudentParticipant = true;
const isSeniorParticipant = false;

// Review the above code. Create a variable called isEligible1 and assign it the value of calling the isEligibleForDiscount with isStudentParticipant and isSeniorParticipant as arguments. What is the value of isEligible1?  


const isStudentParticipant2 = false;
const isSeniorParticipant2 = true;
const isEligible2 = isEligibleForDiscount(isStudentParticipant2, isSeniorParticipant2);

// What is the value of isEligible2?

const isStudentParticipant3 = false;
const isSeniorParticipant3 = false;
const isEligible3 = isEligibleForDiscount(isStudentParticipant3, isSeniorParticipant3);


// What is the value of isEligible3?




/************************ Exercise 7 *************************/

function getWeatherForecast(location) {
  const defaultLocation = 'New York';
  const defaultForecast = 'Partly cloudy with a chance of showers';

  const selectedLocation = location || defaultLocation;

  return `Weather forecast for ${selectedLocation}: ${defaultForecast}`;
}

// Call the getWeatherForecast with no arguments. What is the output? 





// Call the getWeatherForecast with userLocation1 as the argument. What is the output?
const userLocation1 = 'Los Angeles';




/************************ Exercise 8 *************************/

// Create a variable named busRunning and ask the user if the bus is running today.


// Create a second variable named passengerNum and ask the user how many passengers are currently on the bus.


// Create a conditional statement that says if the bus is running AND the bus has less than or equal to 75 passengers, the program gives them an alert that says “You can take the bus!”


// Otherwise, the user should get an alert that says “You will have to wait.”




/************************ Exercise 9 *************************/

function authenticateUser(username, password) {
    const validUsername = "john_doe";
    const validPassword = "secretpassword";
  
    if (username === validUsername && password === validPassword) {
      return "User authenticated.";
    } else {
      return "Invalid username or password.";
    }
  }
  
  
  // Call the authenticateUser function. Pass in arguments that would return "User authenticated"



  // Call the authenticateUser function. Pass in arguments that would return "Invalid username or password."
  




  /************************ Exercise 10 *************************/
  function calculateTotalPrice(quantity, unitPrice) {
    const subtotal = quantity * unitPrice;
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
  
    const discountAmount = (subtotal * discountPercentage) / 100;
    total = subtotal - discountAmount;
  
    return total.toFixed(2);
  }
  
  // Call calculateTotalPrice so that no discount is applied. 



  // Call calculateTotalPrice so that a 5% discount is applied. 



  