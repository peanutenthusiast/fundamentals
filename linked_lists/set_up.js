class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class LinkedList {
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
      this.append(val);
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

      for (let i = 0; i < index - 1; i++) {
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
    if (this.length === 1) {
      //set the value to next
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;

      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }

      curr.next = curr.next.next;
      if (index === this.length - 1) {
        this.tail = curr;
      }
    }
    this.length--;
  }

  contains(number) {
    //if the number is the value of head return true;
    let current = this.head;
    while (current) {
      if (current.value = number) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

}
