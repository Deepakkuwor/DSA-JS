class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addStart(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let newHead = this.head;
            while (newHead.next !== null) {
                newHead = newHead.next;
            }
            newHead.next = newNode;
        }
    }
    addBetween(index, data) {
        if (index > this.size()) {
            console.log("Cannot Insert at this position");
            return;
        }
        
        if (index === 0) {
            this.addStart(data);
            return;
        }
        
        const newNode = new Node(data);
        let newHead = this.head;
        let count = 0;
        while (newHead !== null) {
            if (count === index - 1) {
                newNode.next = newHead.next;
                newHead.next = newNode;
                return;
            }
            count++;
            newHead = newHead.next;
        }
        
    }

    deleteStart() {
        let newHead = this.head;
        this.head = this.head.next;
        newHead.next = null;
    }

    deleteEnd() {
        let newHead = this.head;
        while (newHead.next.next !== null) {
            newHead = newHead.next;
        }
        newHead.next = null;
    }

    deleteBetween(data) {
        let newHead = this.head;
        if (data === newHead.data) {
            this.deleteStart();
            return;
        }
        while (newHead !== null) {
            if (newHead.next.data === data) {
                newHead.next = newHead.next.next;
                return;
            }
            newHead = newHead.next;
        }

    }

    size() {
        let newHead = this.head;
        let count = 0;
        while (newHead !== null) {
            count++;
            newHead = newHead.next;
        }
        return count;
    }
    
    printList() {
        if (this.head === null) {
            console.log("LinkedList is empty");
            return;
        }
        let newHead = this.head;
        const listItem = [];
        while (newHead !== null) {
            listItem.push(newHead.data);
            newHead = newHead.next;
        }
        console.log(listItem.join("->"));

    }

    reverseList() {
        let previous = null;
        let current = this.head;
        let follow = this.head;

        while (current !== null) {
            follow = follow.next;
            current.next = previous;
            previous = current;
            current = follow;
        }
        this.head =  previous;
    }

    sortList() {
        let newHead = this.head;
        
        while (newHead !== null) {  
            let tempHead = newHead.next;
            while (tempHead !== null) {
                if (newHead.data > tempHead.data) {
                   let tempValue = newHead.data;
                   newHead.data = tempHead.data;
                   tempHead.data = tempValue
                }
                tempHead = tempHead.next;
            }
            newHead = newHead.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.addEnd(5);
linkedList.addEnd(7);
linkedList.addEnd(8);
linkedList.addBetween(0, 6)
linkedList.addStart(3);
// linkedList.deleteStart();
// linkedList.deleteEnd();
// linkedList.deleteBetween(6);
linkedList.reverseList();
linkedList.printList();
linkedList.sortList();
linkedList.printList();
