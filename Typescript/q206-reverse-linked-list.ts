//First submission
//Date submitted - 7/9/2022
//Link - https://leetcode.com/problems/reverse-linked-list/
//Runtime - 115ms
//Memory - 44.9MB
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

 function reverseList(head: ListNode | null): ListNode | null {
    var output = null;
    while(head !== null) {
        var newNode = new ListNode(head.val, output);
        output = newNode;
        head = head.next;
    }
    return output;
};