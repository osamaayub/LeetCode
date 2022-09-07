class Solution {
    public boolean isAnagram(String s, String t) {
        //base case
        if(s.length()!=t.length())
        {
            return false;
        }
        int []charCount=new int[26];
        for(int i=0;i<t.length();i++)
        {
            charCount[s.charAt(i)-'a']++;
            charCount[t.charAt(i)-'a']--;
        }
    for(int count:charCount)
    {
        if(count!=0)
        {
            return false;
        }
        
    }
    return true;
    }
};