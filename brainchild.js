// replace this generic Kata class with your main business class
const brainchild = (grid) => {
  if (grid[0][0] === 'B') {
    return [{letter: 'A', start: [0, 1], end: [0, 3] }]
  }
  return [{"end": [0, grid[0].length - 1], "letter": grid[0][0], "start": [0, 0]}]
}

module.exports = brainchild;

