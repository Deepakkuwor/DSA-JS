class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(data) {
        const newNode = new Node(data);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.previous = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if (this.top){
            let tempTop = this.top;
            this.top = this.top.previous;
            tempTop.previous = null;
            this.length--;
        }
    }

    size() {
        return this.length;
    }

    view() {
        if (this.top) {
            let tempTop = this.top;
            
            while(tempTop) {
                console.log("|" + tempTop.data + "|");
                tempTop = tempTop.previous;
            }
        }
    }
}

const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
stack.view();
console.log("Size: " + stack.size());
stack.pop();
stack.view();
console.log("Size: " + stack.size());
