//https://leetcode.com/problems/boats-to-save-people/

public class Solution {
    public int NumRescueBoats(int[] people, int limit) {
        Array.Sort(people);
        
        int smallest=0;
        int biggest=people.Length-1;
        int boats=0;

        while(biggest >= smallest){
            if(people[biggest] + people[smallest] <= limit){
                biggest--;
                smallest++;
            }else{
                biggest--;
            }
            boats++;
        }

        return boats;
    }
}