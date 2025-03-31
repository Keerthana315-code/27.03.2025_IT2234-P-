function getMaxValue(num) {
    if (num.toString().length < 2) {
        return "Input number must have at least 2 digits.";
    }
    return parseInt(num.toString().split("").sort((a, b) => b - a).join(""));
}

// Example usage:
console.log(getMaxValue(215)); // Output: 521
console.log(getMaxValue(1093)); // Output: 9310
