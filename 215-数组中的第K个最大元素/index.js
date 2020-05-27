
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};

const nums = [3,2,1,5,6,4];
const k = 2;

console.time();
console.log(findKthLargest(nums, k));
console.timeEnd();
