// This file contains the splitArr function which takes in a positive integer (groupBy) and an array (nums). The splitArr function returns the array split according to the groupBy value.
 

function splitArr(groupBy, nums=[1,2,3,4,5,6,7,8]) {
  const result = [];
  const multiples = [];
  groupBy = parseInt(groupBy);

  // if user did not specify the group size
    // We did not talk about what to return in this case, but I thought nums made the most sense.
  if (groupBy === null) {
    result.push(nums);
    return JSON.stringify(result);
  }

  if (nums.length <= groupBy) {
    result.push(nums);
    return JSON.stringify(result);
  }

  // Find the multiples of groupBy from 0 to nums.length - 1; 
  // these are the indices that will be used to split the nums array
  for (let i = 0; i < nums.length; i += 1) {
    if (i % groupBy === 0) {
      multiples.push(i);
    }
  }

  for (let i = 0; i < multiples.length; i += 1) {
    const start = multiples[i];

    // Note that the slice array method takes in a start index and an end index, but the end is not included in the subarray that is returned.
    if (multiples[i + 1]) {
      const end = multiples[i + 1];
      result.push(nums.slice(start, end));
    } else {
      result.push(nums.slice(start));
    }
  }

  return JSON.stringify(result);
}

// Some tests:
  // In a real-project I would write these with a testing framework in a separate file, but I am running out of time.

// Assume groupBy is 2:
  // console.log(splitArr([]));  // [[]]
  // console.log(splitArr([2, 7, -1, 18, -7])); // [[2, 7], [-1, 18], [-7]]

// Assume groupBy is 3:
  // console.log(splitArr([1, 2])); // [[1, 2]]
  // console.log(splitArr([1, 2, 3, 4, 5, 6, 7, 8])); // [[1, 2, 3], [4, 5, 6], [7, 8]]

export { splitArr };