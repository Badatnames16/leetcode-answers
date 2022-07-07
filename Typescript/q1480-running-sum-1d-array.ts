//First submission
//Date submitted - 7/6/2022
//Link - https://leetcode.com/problems/running-sum-of-1d-array/
//Runtime - 103ms
//Memory - 44.6MB
function runningSum(nums: number[]): number[] {
    var results = [];
    for(var i = 0; i < nums.length; i++) {
        results.push(getRunningSum(nums, (i+1)))
    }
    return results;
};

function getRunningSum(nums: number[], n: number): number {
    var total = 0;
    for(var i = 0; i < n; i++) {
        total = total + nums[i];
    }
    return total;
}

//Second submission
//Date submitted - 7/6/2022
//Link - https://leetcode.com/problems/running-sum-of-1d-array/
//Runtime - 108ms
//Memory - 45.1MB
function runningSum2(nums: number[]): number[] {
    var results = [];
    for(var i = 0; i < nums.length; i++) {
        if(i == 0){
            results.push(nums[i]);
        } else {
            results.push(results[i-1] + nums[i]);
        }
    }
    return results;
};
