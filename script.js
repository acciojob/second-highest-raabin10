//your JS code here. If required.
function secondHighest(arr) {
    // Check if the array is empty or has only one element.
    if (arr.length <= 1) {
        return -Infinity;
    }
    
    // Initialize variables to keep track of the first and second highest elements.
    let firstHighest = -Infinity;
    let secondHighest = -Infinity;
    
    for (let num of arr) {
        if (num > firstHighest) {
            secondHighest = firstHighest;
            firstHighest = num;
        } else if (num < firstHighest && num > secondHighest) {
            secondHighest = num;
        }
    }
    
    // If all elements are the same, secondHighest will still be -Infinity.
    if (secondHighest === -Infinity) {
        return -Infinity;
    }
    
    return secondHighest;
}

console.log(secondHighest([1, 1, 1, 1, 1]));  // Output: -Infinity