// Define a function 'forEach' which takes two parameters: an array called 'elements' and a function called 'callback'
function forEach(elements, callback) {
    // Iterate over each element in the 'elements' array using a for loop
    for(let i = 0; i < elements.length; i++) {
        // For each iteration, call the 'callback' function, passing the current element as the argument
        callback(elements[i]);
    }
}

// Initialize an array 'numbers' with three number values
let numbers = [500, 80, 20];

// Initialize a variable 'total' to hold the cumulative sum, starting at 0
let total = 0;

// Call the 'forEach' function, passing in the 'numbers' array and a callback function as arguments
forEach(numbers, function(number) {
    // Inside the callback function: add the current number (passed to the callback as 'number') to the 'total' variable
    total += number;
    // This callback function will be executed for each element in the 'numbers' array, 
    // so 'total' will accumulate the sum of all elements in the array
});

// Now 'total' holds the sum of all numbers in the array
console.log(total); // Log the final sum to the console
