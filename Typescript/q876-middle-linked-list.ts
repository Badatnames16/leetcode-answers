//First submission
//Date submitted - 7/9/2022
//Link - https://leetcode.com/problems/middle-of-the-linked-list/
//Runtime - 92ms
//Memory - 42.7MB
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function middleNode(head: ListNode | null): ListNode | null {
    var slow = head;
    var fast = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};