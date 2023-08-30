# Writing Nested Conditional Statements and Using Logical Operators in JavaScript

## Nested Conditions

- Nested conditional statements in JavaScript refer to the practice of placing one conditional statement inside another conditional statement. This allows you to create more complex decision-making logic based on multiple conditions. The inner conditional statements are often enclosed within the blocks of the outer conditional statements.

 ```javascript
if (condition1) {
  // Code block executed if condition1 is true
  if (condition2) {
    // Code block executed if condition1 and condition2 are true
    // Nested conditional statements can continue further if needed
  } else {
    // Code block executed if condition1 is true, but condition2 is false
  }
} else {
  // Code block executed if condition1 is false
}

 ```

## Else if Statements

- In JavaScript, else if statements are used to add additional conditions to the decision-making process. They allow you to specify alternative conditions to be checked when the initial if statement condition is false. The else if statement is an extension of the if statement and provides a way to chain multiple conditions together.


 ```javascript
if (condition1) {
  // Code block executed if condition1 is true
} else if (condition2) {
  // Code block executed if condition2 is true (and condition1 is false)
} else if (condition3) {
  // Code block executed if condition3 is true (and both condition1 and condition2 are false)
} else {
  // Code block executed if none of the conditions are true
}
 ```

## Logical Operators

- In JavaScript, logical operators are used to perform logical operations on Boolean values (true or false) and to combine or modify the result of Boolean expressions. There are three main logical operators in JavaScript:
 - The logical AND operator (&&) returns true if both condition are true; otherwise, it returns false.

 ```javascript
let x = 5;
let y = 10;

console.log(x < 10 && y > 5); // Output: true (both conditions are true)
console.log(x < 3 && y > 15); // Output: false (second condition is false)
 ```

 - The logical OR operator (||) returns true if at least one of the operands is true; otherwise, it returns false.

```javascript
let a = 2;
let b = 8;

console.log(a === 2 || b === 10); // Output: true (first condition is true)
console.log(a === 3 || b === 10); // Output: false (both conditions are false)
```

 - The logical NOT operator (!) negates the Boolean value of an operand. It converts true to false and false to true.

```javascript
let isLogged = false;

console.log(!isLogged); // Output: true (negates the false value to true)

```

### Prep

1. Connect your js file to your HTML file
2. Open your code in the browser and open your console

### Activities
1. In the `js` file, complete the list of exercises. 
