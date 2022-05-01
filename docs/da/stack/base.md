# 栈 Stack

> 栈是一种 后进先出 LIFO 的线性结构

```python
class Stack(object):

    def __init__(self):
        self._stack = []
    
    def push(self, val):
        self._stack.append(val)
    
    def pop(self):
        return self._stack.pop()

stack = Stack()
stack.push(1)
stack.push(3)
stack.push(7)
stack.push(10)

stack.pop()
```
