function evaluateExpressionTree(tree) {  
    let inner = (node) => {
      if (node.left || node.right) {
        if (node.value === -1) {
          return inner(node.left) + inner(node.right)  
        } else if (node.value === -2) {
          return inner(node.left) - inner(node.right)
        } else if (node.value === -3) {
          return Math.trunc(inner(node.left) / inner(node.right))
        } else if (node.value === -4) {
          return inner(node.left) * inner(node.right)
        }
      } else {
        return node.value
      }
    }
    
    return inner(tree);
  }