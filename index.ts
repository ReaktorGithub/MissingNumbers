// The array can be empty or have less than two numbers.
// There can be more than one missing numbers.

const tests: number[][] = [
  [5,0,1,3,2], // 4
  [7,9,10,11,12], // 8
  [-2,-1,1,2,3,4], // 0
  [1,2,3,4,5], // null
  [0], // null
  [], // null
  [2,3,6,1,7,8,4,222] // 5
];

/**
 * A function that finds the first missing number in a series of natural integers
 * @param numbers
 */

const getMissingNumber = (numbers: number[]): number | null => {
  if (!numbers || numbers.length < 2) return null;

  // If an array with insufficient numbers is given, then I do an early return.

  /**
   * Quick sort of the original array
   * @param arr
   */

  function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    } else {
      const pivot = arr[0];
      const less = [];
      const greater = [];

      for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) {
          less.push(arr[i]);
        } else {
          greater.push(arr[i]);
        }
      }

      return quickSort(less).concat(pivot, quickSort(greater));
    }
  }

  const sorted = quickSort(numbers);

  let lastNumber = sorted[0];

  // Saving the first number in the array.

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - lastNumber > 1) {
      // If the current number is greater than the previous one by more than 1, then we have found the desired number.
      return lastNumber + 1;
    } else {
      // Otherwise, I save the new last number and continue the cycle.
      lastNumber = sorted[i];
    }
  }

  // If none of the scripts worked, I return null.

  return null;
}

tests.forEach((test) => {
  const result = getMissingNumber(test);
  console.log(result);
});
