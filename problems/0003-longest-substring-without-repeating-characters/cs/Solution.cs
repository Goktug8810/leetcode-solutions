public class Solution {
    public int LengthOfLongestSubstring(string s) {

        Dictionary<char , int> m=new Dictionary<char, int>();

        int ans=0;
        int left=0;
        int right=0;

        for(int i=0; i < s.Length; ++i){
            if(m.ContainsKey(s[i])){
                left=Math.Max(left,m[s[i]] + 1);
            }

            right +=1;
            m[s[i]]=i;
            ans=Math.Max(right-left,ans);
        }

        return ans;
        
    }
}