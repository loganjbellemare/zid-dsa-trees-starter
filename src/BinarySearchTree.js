class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (value < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
  find(key) {
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      this.left.find(key);
    } else if (key > this.key && this.right) {
      this.right.find(key);
    } else {
      throw new Error("Key not found.");
    }
  }
  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right.findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this.replaceWith(this.left);
      } else if (this.right) {
        this.replaceWith(this.right);
      }
    } else {
      if (key < this.key && this.left) {
        this.left.remove(key);
      } else if (key > this.key && this.right) {
        this.right.remove(key);
      } else {
        throw new Error("Key not found.");
      }
    }
  }
  replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }
      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
  findMin() {
    if (!this.left) {
      return this;
    }
    return this.findMin();
  }
}
