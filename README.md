# LinkedList Implementation

This repository contains a JavaScript implementation of a **linked list**, a dynamic data structure that organizes elements sequentially using nodes. Each node contains a value and a reference to the next node in the sequence.

---

## Features

### **Core Structure**
1. **Node**
   - Represents a single element in the list.
   - Contains:
     - `value`: The data stored in the node.
     - `nextNode`: A pointer to the next node in the list.
   
2. **LinkedList**
   - A collection of connected nodes with:
     - `head`: The first node in the list.
     - `tail`: The last node in the list.
     - `size`: Total number of nodes.

---

### Methods and Functionalities

#### **Basic Operations**
- **`append(value)`**: Adds a new node with the specified value to the end of the list.
- **`prepend(value)`**: Adds a new node with the specified value to the beginning of the list.
- **`pop()`**: Removes the last node from the list.
- **`removeAt(index)`**: Removes the node at the given index.

#### **Advanced Operations**
- **`insertAt(value, index)`**: Inserts a new node at the specified index.
- **`at(index)`**: Returns the node at the given index.
- **`contains(value)`**: Checks if the list contains a node with the specified value.
- **`find(value)`**: Returns the index of the node containing the specified value (or `null` if not found).

#### **Utilities**
- **`getSize()`**: Returns the current size of the list.
- **`getHead()` and `getTail()`**: Return the first and last nodes of the list, respectively.
- **`toString()`**: Prints the list as a string representation in the form of `( value ) -> ( value ) -> null`.

---

### User Interface

- The list's state is displayed in two ways:
  1. **Console Logs**: Each operation's result is printed to the console.
  2. **HTML Output**: The current state of the list is dynamically displayed on the webpage in a visual format.

---

### Example Usage

#### **Code**
```javascript
const list = LinkedList();
list.append(1);
list.append(3);
list.prepend(2);
list.append(4);
list.toString(); // Expected: ( 2 ) -> ( 1 ) -> ( 3 ) -> ( 4 ) -> null

list.pop(); // Removes 4
list.removeAt(1); // Removes the node at index 1
list.insertAt(5, 1); // Inserts 5 at index 1
list.toString(); // Expected: ( 2 ) -> ( 5 ) -> ( 3 ) -> null


git clone https://github.com/your-repo/linked-list.git
