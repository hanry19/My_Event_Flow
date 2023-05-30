class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data) {
        let node = new Node(data, this.head);
        let current;

        if (!this.head) {
            this.head = node;
        }else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            this.size++;
            return;
        }
        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;

        this.size++;
    }

    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                console.log("current Data",current, current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }


    
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0) {
            this.head = current.next;
        }else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    clearList() {
        this.head = null;
        this.size = 0;
    }

    printListData() {
        let current = this.head;
        const arr = [];
        while (current) {
            // console.log("current Data", current.data);
            arr.push(current.data)
            current = current.next;
        }
        return arr;
    }
}