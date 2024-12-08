function LinkedList() {
    let head = null;
    let tail = null;
    let size = 0;

    const append = (value) => {
        const newNode = Node();
        newNode.value = value;
        if (head === null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.nextNode = newNode;
            tail = newNode;
        }
        size++;
        console.log(`Appended: ${value}`);
        console.log(`List after append: ${getValues()}`);
    };

    const prepend = (value) => {
        const newNode = Node();
        newNode.value = value;
        if (head === null) {
            head = newNode;
            tail = newNode;
        } else {
            newNode.nextNode = head;
            head = newNode;
        }
        size++;
        console.log(`Prepended: ${value}`);
        console.log(`List after prepend: ${getValues()}`);
    };

    const getSize = () => {
        console.log(`Size of list: ${size}`);
        return size;
    };

    const getHead = () => {
        console.log(`Head of list: ${head ? head.value : null}`);
        return head;
    };

    const at = (index) => {
        if (index < 0 || index >= size) {
            console.log(`Invalid index: ${index}`);
            return null;
        }
        let current = head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        console.log(`Node at index ${index}: ${current.value}`);
        return current;
    };

    const toString = () => {
        const container = document.getElementById("list-container");
        container.innerHTML = ""; // Clear existing content
        let current = head;

        while (current) {
            const nodeDiv = document.createElement("div");
            nodeDiv.className = "node";
            nodeDiv.textContent = current.value;
            container.appendChild(nodeDiv);

            if (current.nextNode) {
                const arrowSpan = document.createElement("span");
                arrowSpan.className = "arrow";
                arrowSpan.textContent = "→";
                container.appendChild(arrowSpan);
            }

            current = current.nextNode;
        }

        if (!head) {
            container.textContent = "The list is empty.";
        }
        console.log(`List as string: ${getValues()}`);
    };

    const getValues = () => {
        const values = [];
        let current = head;
        while (current) {
            values.push(current.value);
            current = current.nextNode;
        }
        return values.join(" -> ");
    };

    return {
        append,
        prepend,
        getSize,
        getHead,
        at,
        toString,
    };
}

function Node() {
    return { value: null, nextNode: null };
}

// Uso de la lista enlazada
const list = LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("hamster");
list.prepend("rat");
list.toString();
list.getSize();
list.getHead();
list.at(2);
