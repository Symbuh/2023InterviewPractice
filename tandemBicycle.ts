// Two possible implementations
// O(1) Space, O(nlog(n)) Time. 

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b)
    
    fastest ? blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => b - a)
      : blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => a - b)
  
    let total = 0
    
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      total = total + Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])  
    }
    
    return total;
  }

  function tandemBicycle2(redShirtSpeeds, blueShirtSpeeds, fastest) {
    let total = 0
  
    if (redShirtSpeeds.length !== blueShirtSpeeds.length) {
      return 0
    }
    
    redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b)
    blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => a - b)
      
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      if (fastest) {
        total = total + Math.max(
          redShirtSpeeds[i], 
          blueShirtSpeeds[blueShirtSpeeds.length - 1 - i]
        )
      } else {
        total = total + Math.max(
          blueShirtSpeeds[i],
          redShirtSpeeds[i]
        )
      }
    }
    
    return total;
  }