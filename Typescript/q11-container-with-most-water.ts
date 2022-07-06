//First submission
//Date submitted - 7/1/2022
//Link - https://leetcode.com/problems/container-with-most-water
function maxArea(height: number[]): number {
    var maxArea = 0;
    var left = 0;
    var right = height.length - 1;
    while(left < right) {
         var width = right - left;
         maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * width);
         if(height[left] <= height[right]){
             left++;
         } else {
             right--;
         }
         
     }
    return maxArea;
};