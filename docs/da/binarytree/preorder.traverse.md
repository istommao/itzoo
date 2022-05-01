# 前序遍历

> 根结点优先遍历

## 递归实现

```python
def recursive_print(root):
    result = []

    def preorder(root):
        if not root:
            return

        result.append(root.val)

        preorder(root.left)
        preorder(root.right)

    preorder(root)

    return result
```

## 堆栈实现

```python
def stack_print(root):
    stack = []
    result = []

    while root or stack:
        while root:
            stack.append(root)
            result.append(root.val)
            root = root.left

        if stack:
            root = stack.pop()
            root = root.right

    return result
```

## 完整代码

```python
class TreeNode(object):

    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class BinaryTree(object):

    def __init__(self, root):
        self.root = root

    def stack_print(self, root):
        """堆栈实现"""
        stack = []
        lst = []

        while root or stack:
            while root:
                stack.append(root)

                lst.append(root.val)

                root = root.left

            if stack:
                root = stack.pop()
                root = root.right
        
        return lst

    def recursive_print(self, root):
        """递归实现"""
        result = []
        if not root:
            return result

        def preorder(root):
            if not root:
                return

            result.append(root.val)

            preorder(root.left)
            preorder(root.right)

        preorder(root)

        return result

def main():
    left = TreeNode(2, left=TreeNode(4), right=TreeNode(5))

    right = TreeNode(3, left=TreeNode(6), right=TreeNode(7))

    root = TreeNode(1, left=left, right=right)

    tree = BinaryTree(root)

    print('递归 先序遍历:')
    result = tree.recursive_print(tree.root)
    print(result)

    print('堆栈 先序遍历:')
    result = tree.stack_print(tree.root)
    print(result)
```
