# 二叉堆

> ⼆叉堆其实就是⼀种特殊的⼆叉树（完全⼆叉树） 只不过用数组实现

## 实现

```python
# 最小堆实现
class BinaryHeap(object):

    def __init__(self):
        self._heap = [0]
        self.size = 0

    def insert(self, value):
        self._heap.append(value)
        self.size += 1
        self.swim(self.size)

    def get_min_child_index(self, target):
        left_index, right_index = target * 2, target * 2 + 1

        if right_index > self.size:
            return left_index
        else:
            if self._heap[left_index] < self._heap[right_index]:
                return left_index
            else:
                return right_index

    def swim(self, index: int):
        # 上浮
        while index // 2 > 0:
            if self._heap[index] < self._heap[index // 2]:
                self._heap[index // 2], self._heap[index] = self._heap[index], self._heap[index // 2]

            index = index // 2

    def del_min(self):
        retval = self._heap[1]

        # 首位元素交换
        self._heap[1] = self._heap[self.size]
        self.size = self.size - 1

        self._heap.pop()

        # 下沉到合适位置
        self.sink(1)

        return retval

    def sink(self, index):
        # 下沉
        while index * 2 <= self.size:
            # 与最小孩子节点交换位置
            mc = self.get_min_child_index(index)

            if self._heap[index] > self._heap[mc]:
                self._heap[index], self._heap[mc] = self._heap[mc], self._heap[index]

            index = mc

    def build(self, alist):
        i = len(alist) // 2
        self.size = len(alist)
        self._heap = [0] + alist[:]
        while (i > 0):
            self.sink(i)
            i = i - 1
```
