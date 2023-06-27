// Transpose Matrix 

/* 
    Input: 2d Array of integers (matrix)
    Output: Transposed version of said matrix 
        A transpose is a flipped version across its main diagonal (top left to bottom right)

    1  2  3  4
    5  6  7  8
    9 10 11 12
    13 14 15 16

    1 5 9 13
    2 6 10 14
    3 7 11 15
    4 8 12 16

    basically all that's happening here is that the X and Y axis is flipped. 
*/


let transposeMatrix = (matrix) => {
    let output: any = []

    for (let i = 0; i < matrix[0].length; i++) {
        output.push([])
    }
     
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
          output[x].push(matrix[y][x])
        }
    }

    return output
}