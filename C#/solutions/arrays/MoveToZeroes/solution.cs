//https://leetcode.com/problems/move-zeroes/

public class Solution {
    public void MoveZeroes(int[] nums) {
        int zeroIndex=0;

        int n=nums.Length;

        for(int nonZeroIndex=0; nonZeroIndex < n; nonZeroIndex++){
            if(nums[nonZeroIndex]!=0){
                nums[zeroIndex]=nums[nonZeroIndex];
                zeroIndex++;
            }
        }

        for(int i= zeroIndex; i < n; i++){
            nums[i]=0;
        }
    }
}