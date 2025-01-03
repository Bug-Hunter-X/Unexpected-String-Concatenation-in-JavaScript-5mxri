function myFunction(a, b) {
  // Check if both inputs are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    //Handle non-numeric inputs, e.g., throw an error or convert to numbers if appropriate.
    console.error("Invalid input: Both arguments must be numbers.");
    return null; // or handle the error in a suitable way
  }
}

console.log(myFunction(5, 10)); // Output: 15
console.log(myFunction(5, "10")); //Output: Error message
console.log(myFunction(5,10.5)); // Output 15.5