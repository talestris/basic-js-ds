const { NotImplementedError } = require("../lib");
// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = {
      data: data,
      left: null,
      right: null,
    };

    if (this.treeRoot === null) {
      this.treeRoot = newNode;
      return;
    }

    let current = this.treeRoot;

    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    let current = this.treeRoot;

    while (current !== null) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  has(data) {
    let current = this.treeRoot;

    while (current !== null) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = (node, value) => {
      if (node === null) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          return null;
        } else if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }

        let minFromRight = node.right;

        while (minFromRight.left !== null) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    };
    this.treeRoot = removeNode(this.treeRoot, data);
  }

  min() {
    if (this.treeRoot === null) {
      return null;
    }

    let current = this.treeRoot;

    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this.treeRoot === null) {
      return null;
    }

    let current = this.treeRoot;

    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
