
// *  Homework V
// *
// *  Problem 1: Node class
// *
// *  Prompt:    Create a Node class
// *             The Node class should contain the following properties:
// *
// *                   value:   integer value (default null)
// *               leftChild:   pointer to another node (initially null)
// *              rightChild:   pointer to another node (initially null)
// *
// *                 Example:   var sample = new Node(1)
// *                            sample.value        // 1
// *                            sample.leftChild    // null
// *                            sample.rightChild   // null
// *
// *
// *  Problem 2: BinarySearchTree class.
// *
// *  Prompt:    Create a BinarySearchTree class
// *
// *             The BinarySearchTree class should contain the following
// *             properties:
// *
// *                    root:   A pointer to the root node (initially null)
// *                    size:   The number of nodes in the BinarySearchTree
// *
// *             The BinarySearchTree class should also contain the following
// *             methods:
// *
// *                  insert:   A method that takes takes an integer value, and
// *                            creates a node with the given input.  The method
// *                            will then find the correct place to add the new
// *                            node. Values larger than the current node node go
// *                            to the right, and smaller values go to the left.
// *
// *                            Input:     value
// *                            Output:    undefined
// *
// *                  search:   A method that will search to see if a node with a
// *                            specified value exists and returns true or false
// *                            if found.
// *
// *                            Input:     value
// *                            Output:    boolean
// *
// *
// *             What are the time and auxilliary space complexities of the
// *             various methods?
// *
// *
// *  Extra:     Remove method for BinarySearchTree class
// *
// *  Prompt:    Add the following method to the BinarySearchTree class:
// *
// *                  remove:   A method that removes a value matching the input
// *                            the tree is then retied so that the binary search
// *                            tree order is not violated.
class Node {
  constructor(val) {
    this.value = val;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  
  insert(val, currNode = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      this.size++;  
    } else {
      if (val < currNode.value) {
        if (!currNode.leftChild) {
          currNode.leftChild = new Node(val);
          this.size++;
        } else {
          this.insert(val, currNode.leftChild);
        }
      } else if (val > currNode.value) {
        if (!currNode.rightChild) {
          currNode.rightChild = new Node(val);
          this.size++;
        } else {
          this.insert(val, currNode.rightChild); 
        }
      }
    }
  }

  search(val, currNode = this.root) {
    if (!currNode) { return false;}

    if (val === currNode.value) { 
      return true;
    } else {
      if (val < currNode.value) {
        return this.search(val, currNode.leftChild);
      } else if (val > currNode.value) {
        return this.search(val, currNode.rightChild);
      }
    }
  }

  remove(val, currNode = this.root) {
    if (!this.search(val)) return;

    if (val === currNode.value) {
      if (!currNode.leftChild && !currNode.rightCild) {
        currNode.value = null;
      } else if (currNode.rightChild || currNode.leftChild) {
        currNode = currNode.rightChild || currNode.leftChild;
      } else if (currNode.leftChild && currNode.rightChild) {
        const minNode = currNode.rightChild.leftChild ? currNode.rightChild.leftChild : currNOde.leftChild;
        currNode = minNode;
        this.remove(minNode.value);
      }
    } else if (val < currNode.value) {
      this.remove(val, currNode.leftChild)
    } else if (val > currNode.value) {
      this.remove(val, currNode.rightChild)
    }
  }
}