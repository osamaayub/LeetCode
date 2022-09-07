/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if(root==NULL)
        {
            return root;
        }
    //recursively iterate left and Right child of the binary tree
    TreeNode*Left=invertTree(root->left);
    TreeNode*Right=invertTree(root->right);
    
    //swap the leaf nodes of the children of the binary tree
    root->right=Left;
    root->left=Right;
    
    return root;
        
        
    }
};