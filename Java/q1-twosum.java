//Date submitted - 5/30/2020
//Link - https://leetcode.com/problems/two-sum/
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = {0,0};
        boolean found = false;
        for(int i = 0; i < nums.length; i++){
            int num1 = nums[i];
            for(int j = 0; j < nums.length; j++){
                int num2 = nums[j];
                if((num1 + num2) == target && found == false && i != j){
                    found = true;
                    result[0] = i;
                    result[1] = j;
                } 
            }
        }
        
        return result;
    }
}