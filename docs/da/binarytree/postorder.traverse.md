# 后序遍历

> 先左节点 -> 后右节点 -> 根节点

## 堆栈实现

```python
def stack_print(root):
    if not root:
        return
    stack1 = []
    stack2 = []
	result = []
 
    node = root
    stack1.append(node)

    while stack1:
        node = stack1.pop()
        if node.left:
            stack1.append(node.left)
        if node.right:
            stack1.append(node.right)
        stack2.append(node)

    while stack2:
        result.append(stack2.pop().val)
    
    return result
```

## 递归实现

```python
def recursive_print(root):
    result = []

    def postorder(root):
        if not root:
            return

        postorder(root.left)
        postorder(root.right)
        result.append(root.val)

    postorder(root)

    return result
```
