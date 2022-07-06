//First submission
//Date submitted - 7/1/2022
//Link - https://leetcode.com/problems/integer-to-roman/
function intToRoman(num: number): string {
    var result = "";
    // M - 1000
    var m = Math.floor(num / 1000);
    num = num - (m * 1000);
    result = result + "M".repeat(m);
    
    // D - 500
    if(num >= 400 && num < 500) {
        result = result + "CD";
        num = num - 400;
    } else if(num >= 900 && num < 1000) {
        result = result + "CM";
        num = num - 900;
    } else {
        var d = Math.floor(num / 500);
        num = num - (d * 500);
        result = result + "D".repeat(d);
    }
    
    // C - 100
    var c = Math.floor(num / 100);
    num = num - (c * 100);
    result = result + "C".repeat(c);
    
    // L - 50
    if(num >= 40 && num < 50) {
        result = result + "XL";
        num = num - 40;
    } else if(num >= 90 && num < 100) {
        result = result + "XC";
        num = num - 90;
    } else {
        var l = Math.floor(num / 50);
        num = num - (l * 50);
        result = result + "L".repeat(l);
    }
    
    // X - 10
    var x = Math.floor(num / 10);
    num = num - (x * 10);
    result = result + "X".repeat(x);
    
    if(num == 9) {
        result = result + "IX";
        num - 9;
    } else {
        // V - 5
        var v = Math.floor(num / 5);
        num = num - (v * 5);
        result = result + "V".repeat(v);

        if(num == 4) {
            result = result + "IV";
            num - 4;
        } else {
            // I - 1
            var i = Math.floor(num / 1);
            num = num - (i * 1);
            result = result + "I".repeat(i);
        }
    }
    
    
    
    return result;
};