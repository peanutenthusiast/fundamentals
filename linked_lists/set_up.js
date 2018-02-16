/*
*  Homework IV
*
*  Problem 1: Node class
*
*  Prompt:    Create a Node class
*             The Node class should contain the following properties:
*
*                 value:   integer value (initially null)
*                  next:   pointer to another node (initially null)
*
*               Example:   var sample1 = new Node(1)
*                          sample1.value     // 1
*                          sample1.next      // null
*
*               Example:   var sample2 = new Node()
*                          sample2.value     // null
*                          sample2.next      // null
*
*
*  Problem 2:  LinkedList class
*
*  Prompt:     Create a LinkedList class
*              The LinkedList class should contain the following properties:
*
*                length:   The number of nodes in the linked list
*                  head:   A pointer to the head node
*                  tail:   A pointer to the tail node
*
*              The LinkedList class should also contain the following methods:
*
*                append:   A method appends a value to the end of the
*                          LinkedList.
*
*                          Input:     Integer
*                          Output:    LinkedList w/ appended Node instance
*
*                insert:   A method that inserts an integer value at a set
*                          index in the LinkedList (assume head index is 0).
*
*                          Input:     Integer value, Integer index
*                          Output:    LinkedList w/ appended Node instance
*
*                delete:   A method that removes a node at a specified index.
*
*                          Input:     Integer index
*                          Output:    LinkedList w/ removed Node
*
*              contains:   A method that checks to see if a value is contained
*                          in the list.
*
*                          Input:     Integer value
*                          Output:    Boolean
*
*    What are the time and auxiliary space complexity of the various
*    methods?
*
*/

  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    append(val) {
      if (!this.head) {
        this.head = new Node(val);
        this.tail = this.head;
        this.length++;
      } else {
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = new Node(val);
        this.tail = curr.next;
        this.length++;
      }
    }
    insert(val, index) {
      if (index < 0 ||index > this.length) {return;}


      if (this.length === 0) {
        append(val);
      } else if (index === 0) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
      } else if (index === this.length) { 
        let newNode = new Node(val);
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let newNode = new Node(val);
        let curr = this.head;

        for (let i = 0; i <= index; i++) {
          curr = curr.next;
        }

        newNode.next = curr.next;
        curr.next = newNode;
      }
      this.length++;
    }

  delete(index) {
    if (index < 0 || index > this.length || this.length === 0) { return;}

    //nothing to delete if 0; set value to next for head and tail when length = 1 and index = 1; otherwise, iterate to the next next node until index is reached. set that node equal to its nex value;
    if (index === 0 && this.length === 1) {
      //set the value to next
      this.head = this.head.next;
      this.tail = this.tail.next;
    } else {
      let curr = this.head;

      for (let i = 0; i <=)
    }
    this.length--;
  }