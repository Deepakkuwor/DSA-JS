class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    dequeue() {
        if (this.head) {
            let tempHead = this.head;
            this.head = this.head.next;
            tempHead.next = null;
            this.length--;
        }
    }

    size() {
        return this.length;
    }

    view() {
        debugger;
        if (this.tail) {
            let tempHead = this.head;
            const items = [];
            while(tempHead) {
                items.push(tempHead.data);
                tempHead = tempHead.next;
            }
            console.log(items.join("->"));
        }
    }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.view();
console.log("Size: " + queue.size());
queue.dequeue();
queue.view();
console.log("Size: " + queue.size());