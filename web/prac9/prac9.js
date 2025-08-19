function sumArrayElements(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// Example usage:
const numbers = [5, 10, 15, 20];
const total = sumArrayElements(numbers);

console.log("Sum of array elements:", total);
