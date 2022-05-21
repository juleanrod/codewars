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
