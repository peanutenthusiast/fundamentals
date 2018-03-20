const BinarySearchTree = require('./set_up')

BinarySearchTree.prototype.insertMany = (array) => array.map(num => this.insert(num));

/*
 *  1. Write a function that takes in an array of integers and performs the insert method on each
 *     item of the array in order.
 * 
 *  Input: Array
 *  Output: Binary Search Tree
 *
 *  Example: [4, 2, 5, 1, 3, 7, 6, 8]
 *  Output this binary search tree:
 *
 *              4
 *            /   \
 *          2       5
 *        /   \       \
 *      1       3       7
 *                    /   \
 *                  6      8
 */



/*
 *  2. Given the example output binary search tree from Problem 1, what would the order of values
 *     printed be if we used:
 *
 *     a. BREADTH FIRST traversal => [4, 2, 5, 1, 3, 7, 6, 8]
 *
 *     b. PRE-ORDER DEPTH first traversal => [4, 2, 1, 3, 5, 7, 6, 8]
 *
 *     c. IN-ORDER DEPTH first traversal => [1, 2, 3, 4, 5, 6, 7, 8]
 *
 *     d. POST-ORDER DEPTH first traversal => [1, 2, 3, 6, 8, 7]
 */


/*
 *  3a. Using a queue, and while loop write a function that takes in a binary search tree and
 *      outputs an array of values ordered by BREADTH FIRST traversal.
 *
 *  Input: Binary Search Tree
 *  Output: Array
 *
 *  NOTE: You may use an array or linked list for your queue.
 *
 *  NOTE: Confirm with your answer from problem 2a.
 */
BinarySearchTree.prototype.breadthFirst = () => {
  let queue = [this.root];
  const results = [];
  let currNode;

  while (queue.length > 0) {
    currNode = queue.shift();

    if (currNode.leftChild) {
      queue.push(currNode.leftChild)
    }

    if (currNode.rightChild) {
      queue.push(currNode.rightChild)
    }

    result.push(currNode.value);
  }

  return result;
}

/*
 *  3b. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by PRE-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2b.
 */

BinarySearchTree.prototype.preOrderDepthFirst = (results = [], currNode = this.root) => {
  if (results.length === this.size) return results;

  //if no children, push value to result.
  //if left exists, invoke the function with the left child as currnode
  //if right exists, invoke function with right as currndoe

  if (!currNode.leftChild && !currNode.rightChild) {
    results.push(currNode.value);
  } 

  if (!currNode.leftChild) {
    this.preOrderDepthFirst(results, currNode.leftChild)
  }

  if (!currNode.rightChild) {
    this.preOrderDepthFirst(results, currNode.rightChild);
  }
}

/*
 *  3c. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by IN-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2c.
 */


/*
 *  3d. Using recursion, write a function that takes in a binary search tree and
 *      outputs an array of values ordered by POST-ORDER DEPTH FIRST traversal.
 *
 *      Input: Binary Search Tree
 *      Output: Array
 *
 *      NOTE: Confirm with your answer from problem 2d.
 */

