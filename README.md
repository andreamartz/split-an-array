# The challenge posed by Ram Maheshwaram:

Given an array of numbers (nums) and a user input of some integer (groupBy), split the array into multiple subarrays, each with a length of groupBy.

## Exceptions: 
 1. If the length of nums is less than or equal to groupBy, then return nums.
 2. If the length of nums is not evenly divisible by groupBy, then the last subarray returned will have a length of less than groupBy.

## Examples:
nums = [1, 2, 3, 4, 5, 6, 7, 8], groupBy = 3
return [[1, 2, 3], [4, 5, 6], [7, 8]]

nums = [], groupBy can be anything
return []

nums = [1,2], groupBy = 5
return [1,2]