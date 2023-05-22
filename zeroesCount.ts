function bestSeat(seats) {
    let zeroesCount = 0, winningSize = 0, winningIndex
  
    for (let i = 0; i < seats.length; i++) {
      if (seats[i] === 0) {
        zeroesCount++
      } else {
        if (zeroesCount > 0) {
          if (zeroesCount > winningSize) {
            winningSize = zeroesCount
  
            // if odd 
            if (zeroesCount % 2 !== 0) {
              winningIndex = Math.floor(i - 1 - zeroesCount / 2) + 1
            } else {
              // if even
              winningIndex = Math.floor(i - 1 - zeroesCount / 2)
            }
          }  
        }
        
        zeroesCount = 0
      }
    }
    
    return winningIndex ? winningIndex : -1;
  }
  