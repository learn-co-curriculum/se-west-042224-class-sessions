function hasTargetSum(array, target) {
  // Solution 1:
  // for (let i = 0; i < array.length; i++) {
  //   let complement = target - array[i];
  //   for (let j = i + 1; j < array.length; j++) {
  //     if (array[j] === complement) {
  //       return true
  //     }
  //   }
  // }
  // return false
  // Solution 2:
  // let seenNumbers = {}
  // for (let number of array) {
  //   let complement = target - number;
  //   if (seenNumbers[complement]){
  //     return true
  //   }
  //   seenNumbers[number] = true
  // }
  // return false
  // Solution 3 (w/set):
  const seenNumbers = new Set();
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) return true;
    seenNumbers.add(number);
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
  Solution 1: O(n^2) - quadratic 
  Solution 2: O(n) - linear
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
