function twoColorable(edges) {
    let colors = {}
  
    for (let i = 0; i < edges.length; i++) {
      colors[i] = null
    }
  
    // Always make our first node blue (blue = 0, red = 1)
    colors[0] = 0
  
    for (let i = 0; i < edges.length; i++) {
      for (let j = 0; j < edges[i].length; j++) {
        if (edges[i][j] === i) {
          return false
        }
        
        if (colors[i] === 0) {
          if (colors[edges[i][j]] === 0) {
            return false
          } else {
            colors[edges[i][j]] = 1
          }
        } else if (colors[i] === 1) {
          if (colors[edges[i][j]] === 1) {
            return false
          } else {
            colors[edges[i][j]] = 0
          }
        }
      }
    }
    
    return true;
  }