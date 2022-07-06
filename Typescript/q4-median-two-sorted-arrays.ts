//First submission
//Date submitted - 6/22/2022
//Link - https://leetcode.com/problems/median-of-two-sorted-arrays/
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    combineArrays(nums1, nums2);
    const results = (nums1.length%2 == 0) ? calculateEvenMedian(nums1) : calculateOddMedian(nums1);
    return results;
};

function combineArrays(nums1: number[], nums2: number[]) {
    for(let i = 0; i < nums2.length; i++){
        let n2 = nums2[i];
        let j = 0;
        while(n2 > nums1[j]){
            j++;
        }
        nums1.splice(j, 0, n2);
    }
}

function calculateOddMedian(nums: number[]): number {
    const medIndex = ((nums.length + 1) / 2);
    console.log(medIndex);
    return nums[medIndex - 1];
}

function calculateEvenMedian(nums: number[]): number {
    const medIndex1 = (nums.length / 2);
    const medIndex2 = medIndex1 + 1;
    const num1 = nums[medIndex1 - 1];
    const num2 = nums[medIndex2 - 1];
    const result = (num1 + num2) / 2;
    return result;
}