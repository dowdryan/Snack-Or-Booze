function unroll(squareArray) {
    // return [].concat(...squareArray);
    const result = []
    while (squareArray.length > 0) {
        result.push(...squareArray.shift())
        for (let i = 0; i < squareArray.length - 1; i++) {
            result.push(squareArray[i].pop())
        }
        if (squareArray.length > 0) {
            result.push(...squareArray.pop().reverse())
        }
        for (let i = squareArray.length - 1; i >= 0; i--) {
            result.push(squareArray[i].shift())
        }
    }
    return result
}

export default unroll
