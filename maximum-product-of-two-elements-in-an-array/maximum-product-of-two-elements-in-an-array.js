/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let curr = (nums[i] - 1) * (nums[j] - 1);
            if (curr > max) max = curr;
        }
    }
    return max;
};