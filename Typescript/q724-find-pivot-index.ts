//First submission
//Date submitted - 7/6/2022
//Link - https://leetcode.com/problems/find-pivot-index/
//Runtime - 893ms
//Memory - 45.5MB
function pivotIndex(nums: number[]): number {
    for(var i = 0; i < nums.length; i++) {
        var leftSum = getSum(nums, i, 0);
        var rightSum = getSum(nums, i, 1);
        if(leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};

function getSum(nums: number[], ind: number, side: number) {
    var total = 0;
    if(side == 0) {
        //left
        for(var i = 0; i < ind; i++) {
            total = total + nums[i];
        }
        return total;
    } else {
        //right
        for(var i = (ind+1); i < nums.length; i++) {
            total = total + nums[i];
        }
        return total;
    }
}
    