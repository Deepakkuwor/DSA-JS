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
        if (this.isEmpty()) {
            this.top = newNode;
        } else {
            newNode.previous = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if (!this.isEmpty()){
            let tempTop = this.top;
            this.top = this.top.previous;
            tempTop.previous = null;
            this.length--;
        } else {
            console.log("Stack is empty cannot pop an item");
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.top.data;
        } else {
            return "Stack is empty cannot peek an item";
        }
    }

    size() {
        return this.length;
    }

    view() {
        if (!this.isEmpty()) {
            let tempTop = this.top;
            
            while(tempTop) {
                console.log("|" + tempTop.data + "|");
                tempTop = tempTop.previous;
            }
        } else {
            console.log("Stack is empty");
        }
    }
}

const stack = new Stack();
stack.view();
stack.push(5);
stack.push(10);
stack.push(15);
console.log("Size: " + stack.size());
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.view();
console.log("Size: " + stack.size());
console.log("Top Element: " + stack.peek());

