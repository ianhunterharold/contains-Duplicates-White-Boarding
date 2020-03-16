// Contains Duplicate
// Contains Duplicate

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // iterate through the array
  // compare if a value is duplicated in the array 
  // if there is a duplicate, kick out true and stop iterating to save time 
  let comparedValue = nums[0]
  for (let i = 0; i < nums.length; i++){
    for (let j = 0 ; j < i; j++){
      if (nums[i] === nums[j]){
        return true
      }    
    }
  }
    return false;
};