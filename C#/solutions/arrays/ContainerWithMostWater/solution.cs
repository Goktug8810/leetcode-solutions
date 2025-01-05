//Given n non-negative integers where each integer represent the height of a vertical line on chart 
//Find two lines, which together with x-axis forms a container, that holds the biggest amount of water return the area of that water.

//Brut-force solution
public class Solution {
    public int MaxArea(int[] height) {
        int maxArea=0;
        int n=heights.Length;

        for(int p1=0; p1 < n; p1++ ){
            
            for(int p2=p1+1; p2 < n; p2++){
                int length=Math.min(heights[p1], heights[p2]);
                int width=p2-p1;
                int area=length * width;
                maxArea=Math.max(area,maxArea);
            }
        }
        return maxArea;
    }
}

//Time Complexity'i iç içe döngüden dolayı (O²).

//Two Pointer metoduyla bunu (O)'ya düşürebiliriz.

public Solution{
    public int MaxArea(int[] height){
        int MaxArea=0;
        int left=0; //0.index, dizinin ilk elemanı
        int right=heights.Length-1; //dizinin son elemanı

        while(left < right){
            int length=Math.min(heights[left],heights[right]);
            int width=right-left;
            int area=length*width;
            maxArea=Math.max(area,MaxArea);

            // Daha kısa olan tarafı hareket ettiriyoruz, çünkü "constraint value" kısa olan değer,
            //yüksekligi daha kısa olan taraf belirleyecek ki su taşması olmasın.
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return MaxArea;
    }
}

