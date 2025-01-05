/**
 * @param {number[]} height
 * @return {number}
 */

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
var height = [0,1,0,2,1,0,1,3,2,1,2,1];

var trap = function(height) {

    let n=height.length;
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);

    left[0]=height[0];
    right[0]=height[n-1];

    for (let i=1; i < n; i++)
    {
        left[i]=Math.max(left[i-1],height[i]);
    }

    for (let i=n-2; i >=0; i--){
        right[i]=Math.max(height[i+1],height[i])
    }

    let ans=0;
    for (let i =0; i < n; i++){
        ans += (Math.min(left[i], right[i]) - height[i]);
    }

    return ans;
};