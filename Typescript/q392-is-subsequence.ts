//First submission
//Date submitted - 7/9/2022
//Link - https://leetcode.com/problems/is-subsequence/
//Runtime - 79ms
//Memory - 44.5MB
function isSubsequence(s: string, t: string): boolean {
    var i = 0;
    var j = 0;
    var sSplit = s.split("");
    var tSplit = t.split("");
    while(i < sSplit.length && j < tSplit.length) {
        if(sSplit[i] === tSplit[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    if(i === sSplit.length) {
        return true;
    } else {
        return false;
    }
};