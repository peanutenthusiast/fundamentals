const LinkedList =  require('set_up')

/*
 * 1a. Create a method on the singly LinkedList class which prints the value of 
 *     each node from the head to the tail
 *
 * Input: N/A
 * Output: Print all elements from head to tail
 *
 * Example: (1) --> (5) --> (7) --> (10) .printForward()
 *          Head                    Tail
 *          1
 *          5
 *          7
 *          10
 *
 * What is the time and auxiliary space complexity of your solution?
 */

LinkedList.prototype.printForward = function() {
  let head = this;
  let currNode = head.head;
  console.log(currNode.value);
  while (currNode.next !== null) {
    console.log(currNode.next.value);
    currNode = currNode.next;
  }
}

/*
 * 1b. Create a method on the singly LinkedList class which prints the value of 
 *     each node from tail to head using recursion
 *
 * Input: N/A
 * Output: Print all elements from tail to head
 *
 * Example: (1) --> (5) --> (7) --> (10) .printBackward()
 *          Head                    Tail
 *          10
 *          7
 *          5
 *          1
 *
 * What is the time and auxiliary space complexity of your solution?
 */

LinkedList.prototype.printBackward = () => {

  const traverse = (currNode) => {
    if (!currNode) {return;}

    traverse(currNode.next)

    console.log(currNode.value);
  }

  traverse(this.head);
}

/*
 * 1c. Create a method on the singly LinkedList class that reverses the order of 
 *     the nodes in the linked list
 *
 * Input: N/A
 * Output: Reverse the order of the nodes
 *
 * Example: (1) --> (5) --> (7) --> (10) .reverse()
 *          Head                    Tail
 *
 *          (10) --> (7) --> (5) --> (1)
 *          Head                    Tail
 *
 * What is the time and auxiliary space complexity of your solution?
 */

// LinkedList.prototype.reverse = () => {
//   let temp = new LinkedList();

//   const traverse = (currNode) => {
//     if (!currNode) {return;}

//     traverse(currNode.next)

//     temp.append(currNode.value);
//   }

//   traverse(this.head);

//   this.head = temp.head;
//   this.tail = this.tail;
// }
//

LinkedList.prototype.reverse = () => {

  let currNode = this.head,
      prev = null,
      next;

  this.tail = currNode;

  while (currNode) {
    next = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = next;
  }

  this.head = prev;
}

//time complexity = O(n), n being the length of the linked list, space complexity = O(1) 

/*
 * 1d. Create a method on the singly LinkedList class which swaps the first 
 *     occurance of the locations of two nodes in the linked list.
 *
 * Input: Two values (a & b)
 * Output: Swapped nodes containing values a & b
 *
 * Example: (1) --> (5) --> (7) --> (10) .swap(5, 10)
 *          Head                    Tail
 *
 *          (1) --> (10) --> (7) --> (5)
 *          Head                    Tail
 *
 * What is the time and auxiliary space complexity of your solution?
 */




/*
 *     Extra Credit     
 */

/*
 * Extra Credit 1:
 *
 * Write a function that, given an input of a ListNode, returns true if the 
 * ListNode is in a circul
