/*
 * DESCRIPTION:
 * Linked Lists - Sorted Insert
 * Write a SortedInsert() function which inserts a node into the correct 
 * location of a pre-sorted linked list which is sorted in ascending order. 
 * SortedInsert takes the head of a linked list and data used to create a node
 * as arguments. SortedInsert() should also return the head of the list.
 *
    Expected:
    sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
    sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
    sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)
 * */

function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  var current;
  let newNode = new Node(data);
  // Special case for head node
  if (head == null || head.data >=  newNode.data) {
      newNode.next = head;
      head = newNode;
      return head;
  } else {
      current = head;

      while (current.next != null && current.next.data < newNode.data)
          current = current.next;

      newNode.next = current.next;
      current.next = newNode;
  }
  return head;
}

// Time to complete: 29min
