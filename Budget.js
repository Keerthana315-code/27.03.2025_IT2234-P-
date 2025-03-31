function getMaxPurchase(budget, keyboardPrices, mousePrices) {
    let max = -1;
    for (let i = 0; i < keyboardPrices.length; i++) {
        for (let j = 0; j < mousePrices.length; j++) {
            let total = keyboardPrices[i] + mousePrices[j];
            if (total <= budget && total > max) {
                max = total;
            }
        }
    }
    return max;
}

// Example usage:
const budget1 = 60;
const keyboards1 = [40, 50, 60];
const mice1 = [5, 8, 12];
console.log(getMaxPurchase(budget1, keyboards1, mice1)); // Output: 58
