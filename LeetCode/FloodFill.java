class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
        if(image[sr][sc]==color)
        {
            return image;
        }
        floodFillUtil(image,sr,sc,image[sr][sc],color);
        return image;
        
    }
    private  void floodFillUtil(int [][]image,int sr,int sc,int prevColor,int newColor)
    {
        if(sr<0||sc<0||sr>=image.length||sc>=image[0].length||image[sr][sc]!=prevColor)
        {
            return ;
        }
        image[sr][sc]=newColor;
        floodFillUtil(image,sr+1,sc,prevColor,newColor);
        floodFillUtil(image,sr,sc+1,prevColor,newColor);
        floodFillUtil(image,sr-1,sc,prevColor,newColor);
        floodFillUtil(image,sr,sc-1,prevColor,newColor);
    }
}
