# Tests for the sum Function

### Overview

These tests check that our sum function works as expected for different cases. We test with positive and negative integers, floating-point numbers, and even edge cases like missing parameters or invalid inputs.

### 1. Basic Integer Tests

We check if the sum of two numbers returns the expected result.
Example: sum(1,1) → 2

We also test with different sets of integer values, including negative numbers and zero.
Example:

    sum(-2, -4) → -6
    sum(-2, 4) → 2
    sum(0, 0) → 0

### 2. Basic Float Tests

loating-point numbers can be tricky due to precision issues. Instead of checking for exact equality, we use a tolerance of 0.01 to make sure our results are close enough.
Example:

    sum(2.4, -2.5) → -0.1 (but since -0.1 might be -0.10000000000000003, we check within ±0.01)
    expect(sum(a, b)).to.be.closeTo(result, 0.01);

### 3. Exception handling

The function should throw an error if:

    A parameter is missing → Throws "parameter missing"
