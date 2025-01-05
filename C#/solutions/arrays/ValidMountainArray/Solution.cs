//Problem link : https://leetcode.com/problems/valid-mountain-array/

public class Solution {
    public bool ValidMountainArray(int[] arr) {
       int i=1;
       while(i < arr.Length && arr[i] > arr[i-1]){
        i++;
       }

       if(i==1 || i==arr.Length){
        return false;
       }

       while(i < arr.Length && arr[i] < arr[i-1]){
        i++;
       }

       return i==arr.Length;
    }
}