# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript error caused by its loose typing system. When performing addition with variables of different types (e.g., number and string), JavaScript may concatenate the values instead of performing numerical addition.

## Bug

The `bug.js` file contains a function `myFunction` that is supposed to add two numbers.  However, when one of the arguments is a string, it concatenates the string and number rather than adding them numerically.

## Solution

The `bugSolution.js` file provides a corrected version of `myFunction` that uses type checking and explicit conversion to handle different data types appropriately. This prevents the unexpected concatenation behavior.

## How to Reproduce

1. Clone the repository.
2. Run `node bug.js` to see the unexpected output.
3. Run `node bugSolution.js` to see the corrected output.