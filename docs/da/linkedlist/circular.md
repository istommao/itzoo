# 环形链表

**快慢指针**


[leetcode.142 环形链表](https://leetcode-cn.com/problems/linked-list-cycle-ii/)


```python
class Solution:

    def detectCycle(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return None

        slow = head
        fast = head

        while True:
            if not fast or not fast.next:
                return None

            slow = slow.next
            fast = fast.next.next

            if fast == slow:
                break

        fast = head
        while slow != fast:
            slow = slow.next
            fast = fast.next

        return fast
```
