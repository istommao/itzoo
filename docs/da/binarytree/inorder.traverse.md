# 中序遍历

> 先左节点 -> 根节点 -> 右节点

## 堆栈实现

```python
def stack_print(root):
    stack = []
    result = []

    while root or stack:
        while root:
            stack.append(root)
            root = root.left

        if stack:
            root = stack.pop()
            result.append(root.val)
            root = root.right

    return result
```

## 递归实现

```python
def recursive_print(root):
    result = []

    def inorder(root):
        if not root:
            return

        inorder(root.left)
        result.append(root.val)
        inorder(root.right)

    inorder(root)

    return result
```

## 完整代码

```python
class TreeNode(object):

    def __init__(self, val=None, left=None, right=None):
        self.left = left
        self.right = right
        self.val = val

class BinTree(object):

    def __init__(self, root):
        self.root = root

    def stack_print(self, root):
        """堆栈实现"""
        stack = []

        result = []

        while root or stack:
            while root:
                stack.append(root)
                root = root.left

            if stack:
                root = stack.pop()
                result.append(root.val)
                root = root.right
        
        return result

    def recursive_print(self, root):
        """递归实现"""
        result = []
        if not root:
            return result

        def inorder(root):
            if not root:
                return

            inorder(root.left)
            result.append(root.val)
            inorder(root.right)

        inorder(root)

        return result

def main():
    left = TreeNode(2, left=TreeNode(4), right=TreeNode(5))

    right = TreeNode(3, left=TreeNode(6), right=TreeNode(7))

    root = TreeNode(1, left=left, right=right)

    tree = BinTree(root)

    print('递归 中序遍历:')
    result = tree.recursive_print(tree.root)
    print(result)

    print('堆栈 中序遍历:')
    result = tree.stack_print(tree.root)
    print(result)
```