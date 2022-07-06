//First submission
//Date submitted - 6/24/2022
//Link - https://leetcode.com/problems/palindrome-number/
function isPalindrome(x: number): boolean {
    let sX = x.toString().split('').reverse().join('');
    return (x.toString() === sX);
};