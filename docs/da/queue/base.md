# 队列

> 队列是一种 先进先出的 FIFO 线性结构

```python
class Queue(object):

    def __init__(self):
        self._queue = []
    
    def enqueue(self, val):
        self._queue.append(val)
    
    def dequeue(self):
        if self._queue:
            return self._queue.pop(0)

q = Queue()
q.enqueue(5)
q.enqueue(2)
q.enqueue(3)
q.dequeue()
```
