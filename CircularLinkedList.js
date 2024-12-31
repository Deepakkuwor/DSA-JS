class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            debugger;
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
    }

    view() {
        let tempHead = this.head;
        const listItem = [];
        do {
            listItem.push(tempHead.data);
            tempHead = tempHead.next;
        }
        while (tempHead != this.head);
        console.log(listItem.join("->"));

    }
}

const circularLinkedList = new CircularLinkedList()
circularLinkedList.add(5)
circularLinkedList.add(10);
circularLinkedList.view();