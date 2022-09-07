class Solution {
    public int maxSubArray(int[] nums) {
        int CurrentMaxSum=nums[0];
        int MaxSumSoFar=nums[0];
        
        for(int i=1;i<nums.length;i++)
        {
            CurrentMaxSum=Math.max(CurrentMaxSum+nums[i],nums[i]);
            MaxSumSoFar=Math.max(CurrentMaxSum,MaxSumSoFar);
        }
        return MaxSumSoFar;
    }
}
