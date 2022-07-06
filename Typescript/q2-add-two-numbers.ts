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

//First submission
//Date submitted - 6/22/2022
//Link - https://leetcode.com/problems/add-two-numbers/
 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0);
    let currNode = dummyHead;
    let carry = 0;
    let p = l1;
    let q = l2;
    while(p != null || q != null){
        let x = (p != null) ? p.val : 0;
        let y = (q != null) ? q.val : 0;
        let sum = x + y + carry;
        carry = (sum >= 10) ? 1 : 0;
        let tempNode = new ListNode(sum%10);
        currNode.next = tempNode;
        currNode = currNode.next;
        if(p != null) p = p.next;
        if(q != null) q = q.next;
    }
    if(carry > 0) {
        currNode.next = new ListNode(carry);
    }
    return dummyHead.next;
};