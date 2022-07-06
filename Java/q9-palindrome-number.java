//First submission
//Date submitted - 5/30/2020
//Link - https://leetcode.com/problems/palindrome-number/
class Solution {
    public boolean isPalindrome(int x) {
        
        //String test = ""+x;
        StringBuilder rev = new StringBuilder();
        rev.append(x).reverse();
        
        if(Integer.toString(x).equals(rev.toString())){
            return true;
        }else return false;
        
    }
}