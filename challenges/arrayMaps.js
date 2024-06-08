function hasSubarrayWithSum(arr, target) {
    let currentSum = 0;
    const sumSet = new Set();

    for (let num of arr) {
        currentSum += num;

        if (currentSum === target || sumSet.has(currentSum - target)) {
            return true;
        }

        sumSet.add(currentSum);
    }

    return false;
}

// Example usage
console.log(hasSubarrayWithSum([4, 2, 7, 1, 9, 5], 17)); // true
