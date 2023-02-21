// Given an array of numbers (nums) and a user input of some integer (groupBy),
// split the array into multiple arrays, each with a length of groupBy.
// Exceptions: 
  // 1. If the length of nums is less than or equal to groupBy, then return nums.
  // 2. If the length of nums is not evenly divisible by groupBy, then the last array returned will have a length of less than groupBy.

// Examples:
// nums = [1, 2, 3, 4, 5, 6, 7, 8], groupBy = 3
// return [[1, 2, 3], [4, 5, 6], [7, 8]]

// nums = [], groupBy can be anything
// return []

// nums = [1,2], groupBy = 5
// return [1,2]

// function getGroupBy() {
//   let groupBy = prompt("Please enter the desired length of each subarray: "); 
//   groupBy = groupBy?.trim();  // trims the whitespace from the left and right
//   let hasWhitespace  = /\\s/g.test(groupBy);  // boolean - internal whitespace?

//   console.log("ANSWER: ", groupBy, typeof groupBy);

//   console.log("ANSWER-PARSEINT: ", parseInt(groupBy), typeof parseInt(groupBy), "BELOW 1: ", parseInt(groupBy) < 1);

//   while ((parseInt(groupBy) < 1) || hasWhitespace  || !groupBy) {
//     if (groupBy?.toLowerCase() === 'q') {
//       return null;
//     }
//     const promptMsg = "Please enter a number greater than or equal to 1 for  the desired length of each subarray or (Q to quit): ";

//     // if response is less than 1
//     if (parseInt(groupBy) < 1) {
//       groupBy = prompt(`Your entry was less than 1 and could not be processed.\n${promptMsg}`);
//     }

//     if (hasWhitespace) {
//       groupBy = prompt(`Your entry contained at least one space and could not be processed.\n${promptMsg}`);
//     }
//     // if no response
//     if (!groupBy) {
//       groupBy = prompt(`No entry was found.\n${promptMsg}`);
//     }
//   }
//   // console.log("RETURN VALUE: ", groupBy);

//   return groupBy;
// }
function isTooLow(groupBy) {
  
}

function hasWhiteSpace(groupBy) {

}

function exists(groupBy) {

}

function validateGroupBy(groupBy) {
  const prompt = "Please enter the desired length of each subarray."; 
  const isTooLow = parseInt(groupBy) < 1;

  groupBy = groupBy?.trim();  // trims the whitespace from the left and right
  let hasWhitespace  = /\\s/g.test(groupBy);  // boolean - internal whitespace?

  console.log("ANSWER: ", groupBy, typeof groupBy);

  console.log("ANSWER-PARSEINT: ", parseInt(groupBy), typeof parseInt(groupBy), "BELOW 1: ", parseInt(groupBy) < 1);

  // while ((parseInt(groupBy) < 1) || hasWhitespace  || !groupBy) {
  //   if (groupBy?.toLowerCase() === 'q') {
  //     return null;
  //   }
  //   const promptMsg = "Please enter a number greater than or equal to 1 for  the desired length of each subarray or (Q to quit): ";

  //   // if response is less than 1
  //   if (parseInt(groupBy) < 1) {
  //     groupBy = prompt(`Your entry was less than 1 and could not be processed.\n${promptMsg}`);
  //   }

  //   if (hasWhitespace) {
  //     groupBy = prompt(`Your entry contained at least one space and could not be processed.\n${promptMsg}`);
  //   }
  //   // if no response
  //   if (!groupBy) {
  //     groupBy = prompt(`No entry was found.\n${promptMsg}`);
  //   }
  // }
  // console.log("RETURN VALUE: ", groupBy);

  return groupBy;
}

function splitArr(nums) {
//   const result = [];
//   const multiples = [];
//   let groupBy = getGroupBy();
//   // if user did not specify the group size
//     // We did not talk about what to return in this case, but I thought nums made the most sense.
//   if (groupBy === null) {
//     result.push(nums);
//     return result;
//   }

//   if (nums.length <= groupBy) {
//     result.push(nums);
//     return result;
//   }

//   // Find the multiples of groupBy from 0 to nums.length - 1; 
//   // these are the indices that will be used to split the nums array
//   for (let i = 0; i < nums.length; i += 1) {
//     if (i % groupBy === 0) {
//       multiples.push(i);
//     }
//   }

//   for (let i = 0; i < multiples.length; i += 1) {
//     const start = multiples[i];

//     // Note that the slice array method takes in a start index and an end index, but the end is not included in the subarray that is returned.
//     if (multiples[i + 1]) {
//       const end = multiples[i + 1];
//       result.push(nums.slice(start, end));
//     } else {
//       result.push(nums.slice(start));
//     }
//   }

//   return result;
}

// Some tests (in a project I would write these with a testing framework)
// console.log(splitArr([]));  // [[]]
// console.log(splitArr([1, 2])); // [[1, 2]]
// console.log(splitArr([2, 7, -1, 18, -7])); // [[2, 7], [-1, 18], [-7]]
// console.log(splitArr([1, 2, 3, 4, 5, 6, 7, 8])); // [[1, 2, 3], [4, 5, 6], [7, 8]]

// export {getGroupBy, splitArr};
export {validateGroupBy, splitArr};