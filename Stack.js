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
        if (this.top){
            let tempTop = this.top;
            this.top = this.top.previous;
            tempTop.previous = null;
            this.length--;
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        if(this.top) {
            return this.top.data;
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
console.log("Top Element: " + stack.peek());

