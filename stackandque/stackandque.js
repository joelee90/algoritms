스택/큐 : collection of items, linear data structures.

stack : Last In First Out(LIFO)
        push()
        pop()
        peek() - display top item

queues : First In First Out(FIFO)
        push()
        shift()


const stack = [];
//stack : add to the end of the array
stack.push('dog', 'cat', 'bear');
//pop : remove from the end of the array
stack.pop();
//peak : look at the last item
stack[stack.length - 1]

//stack
class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(element) {
        this.size++;
        this.storage[this.size] = element;
    }

    pop() {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peek() {
        return this.storage[this.size];
    }
}

const stack = new Stack();
//add
stack.push('dog')
stack.push('cat')
stack.push('bear')
//remove
stack.pop();
//peak
stack.peek();

//Queues
class Queues {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    enqueues(element) {
        this.storage[this.tail] = element;
        this.tail++;
    }

    dequeues() {
        let removed = this.storage[this.head];
        delete this.storage[this.head]
        this.head++;
        return removed;
    }
}

const que = new Queues;

que.enqueues('lion')
que.enqueues('tiger')
que.enqueues('bear')

que.dequeues();
