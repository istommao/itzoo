# 最小栈

> 在 O(1)的时间复杂度 返回栈中的最小元素

*tips* 使用两个栈

```python
class MinStack(object):

    def __init__(self):
        self._stack = []
        self._min = []

    def push(self, val):
        self._stack.append(val)

        if not self.get_min() or val <= self.get_min():
            self._min.append(val)

    def pop(self):
        val = self._stack.pop()
        if val == self.get_min():
            self._min.pop()

    def top(self):
        return self.stack[-1]

    def get_min(self):
        if self._min:
            return self._min[-1]

stack = MinStack()
stack.push(2)
stack.push(3)
stack.push(9)
stack.push(5)
stack.push(1)

stack.get_min()
stack.pop()
stack.get_min()
```
