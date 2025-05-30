https://leetcode.com/problems/linked-list-cycle/submissions/1569372706/

public class Solution {
    public bool HasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false; 
        }

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;         
            fast = fast.next.next;     

            if (slow == fast) {        
                return true;
            }
        }

        return false;
    }
}