// This is an input class. Do not edit.
class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }
  
  function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let pathToTop = (tree, top, output = []) => {
      if (tree.name === top.name) {
        output.push(tree)
        return output; 
      } else {
        output.push(tree)
        return pathToTop(tree.ancestor, top, output)
      }
    }
  
    let familyTreeOne = pathToTop(descendantOne, topAncestor)
    let familyTreeTwo = pathToTop(descendantTwo, topAncestor)
    
    let treeOneSet = new Set()
  
    for (let i = 0; i < familyTreeOne.length; i++) {
      treeOneSet.add(familyTreeOne[i].name)
    }
  
    for (let i = 0; i < familyTreeTwo.length; i++) {
      if (treeOneSet.has(familyTreeTwo[i].name)) {
        return familyTreeTwo[i]
      }
    }
  
  }