function numberOfWaysToTraverseGraph(width, height) {
    // Initialize a representation of the graph, each value represents the number of ways 
    // to reach that position from the top left corner of the graph.
    let graph: any[] = []
  
    for (let i = 0; i < height; i++) {
      graph.push([1])
    }
  
    for (let i = 0; i < width - 1; i++) {
      graph[0].push(1)
    }
    
    // Now we simply loop through the graph and calculate the remaining columns to get our solution.
    // the sum of the ways to reach the position directly to the left, and directly above will equal 
    // the number of ways to reach our current position. 
  
    for (let i = 1; i < graph.length; i++) {
      for (let j = 1; j < width; j++) {
        graph[i].push(graph[i - 1][j] + graph[i][j - 1])
      }
    }
    
    return graph[graph.length - 1][graph[0].length - 1];
  }
  