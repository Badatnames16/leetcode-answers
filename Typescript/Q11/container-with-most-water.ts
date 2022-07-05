//Original Solution
function maxArea(height: number[]): number {
    var result = 0;
    for(var i = 0; i < height.length; i++){
        for(var j = 0; j < height.length; j++){
            if(j > i) {
                var area = calculateArea(height[i], (i+1), height[j], (j+1))
                if(area > result) {
                    result = area;
                }
            }
        }
    }
    return result;
};

function calculateArea(num1: number, n1Index: number, num2: number, n2Index: number): number {
    var height = Math.min(num1, num2);
    var width = n2Index - n1Index;
    return (height * width);
}

//Revised solution
function maxArea2(height: number[]): number {
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