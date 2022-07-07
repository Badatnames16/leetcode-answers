//First submission
//Date submitted - 7/6/2022
//Link - https://leetcode.com/problems/isomorphic-strings/
//Runtime - 127ms
//Memory - 46.1MB
function isIsomorphic(s: string, t: string): boolean {
    const obj = {};
    const sSplit = s.split("");
    const tSplit = t.split("");
    for(var i = 0; i < sSplit.length; i++){
        const key = sSplit[i];
        const value = tSplit[i];
        if(obj[key] !== undefined) {
            if(obj[key] !== value) return false;
        } else if(Object.values(obj).includes(value)) {
            return false;
        } else {
            obj[key] = value;
        }
    }
    console.log(obj);
    return true;
};