//First submission
//Date submitted - 7/4/2022
//Link - https://leetcode.com/problems/longest-common-prefix
function longestCommonPrefix(strs: string[]): string {
    var longest = Math.max(...(strs.map(x => x.length)));
    var result = "";
    for(let i = 0; i < longest; i++) {
        var chars = "";
        for(var j = 0; j < strs.length; j++) {
            if(strs[j].split("")[i] != undefined){
                var c = strs[j].split("")[i];
                chars = chars + c;
            } else {
                chars = chars + " ";
            }
            
        }
        if(chars.split("").every(c => c === chars[0])){
            result = result + chars.split("")[0];
        } else {
            return result;
        }
    }
    return result;
};