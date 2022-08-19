/*
 * Description:
 * You are given a binary tree:
 * class Node {
 *      constructor(value, left = null, right = null) {
 *          this.value =  value;
 *          this.left = left;
 *          this.right = right;
 *      }
 *  }
 *
 * Your task is to return the list with elements from tree sorted by levels, 
 * which means the root element goes first, then root children (from left to right) are second and third, and so on.

 * Return empty array if root is null.
*/


function treeByLevels (rootNode) {
  if(rootNode == null) return [];
  const queue = [rootNode];
  const result = [];
  while(queue.length > 0) {
    let curr = queue.shift();
    result.push(curr.value);
    if(curr.left !== null) {
      queue.push(curr.left);
    }
    if(curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return result;
}

// time to complete: 6minutes
