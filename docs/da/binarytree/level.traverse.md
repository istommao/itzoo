# 层级遍历

> 从上到下 从左到右 遍历

## 队列实现

```python
def stack_print(root):
    node = root
    queue = [node]
    result = []

    while queue:
        count = len(queue)
        line = []
        for i in range(count):
            node = queue.pop(0)
            line.append(node.val)

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        result.append(line)

    return result
```
