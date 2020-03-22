module.exports = {
  makeField,
  // findLiveNeighbours,
  // findCoordinates,
  // addOne,
  // subOne,
  // getNeighboursIndex,
  // nextGeneration,
  // tomNeighbours
  runGame
}
const display = require('./display')

let field = makeField(150)
runGame()

function runGame () {
  field = nextGeneration(field)
  display(field)
}

setInterval(runGame, 5)

function makeField (size) {
  let field = []
  for (let i = 0; i < size * size; i++) {
    let rand = Math.random()
    if (rand > 0.7) {
      field.push(1)
    } else {
      field.push(0)
    }
  }
  return field
}

function nextGeneration (field) {
  let nextField = []
  let size = Math.sqrt(field.length)
  for (let i = 0; i < field.length; i++) {
    let f = field[i]
    let n = getNeighbours(i, size)
    let ln = findLiveNeighbours(field, n)
    if (f === 0 && ln === 3) {
      f = 1
    } else if (f === 1 && (ln === 2 || ln === 3)) {
      f = 1
    } else {
      f = 0
    }
    nextField.push(f)
  }
  return nextField
}

function getNeighbours (ind, size) { // (index being looked up, square root of array length)
  let neighbours = []
  let relPowerTen = Math.floor(Math.log10(size) + 1) //
  let col = (ind / size) % 1 // finds the value corresponding to the column of index being checked
  let row = ((Math.floor(ind / size)) / size) // finds the value corresponding to the row of index being checked
  col = Math.round(col * Math.pow(10, relPowerTen)) / Math.pow(10, relPowerTen)
  row = Math.round(row * Math.pow(10, relPowerTen)) / Math.pow(10, relPowerTen) // attempts to avoid rounding errors
  for (let i = 0; i < 9; i++) {
    let itRow = Math.floor(i / 3) - 1 // changes the operation to perform on the row variable
    let itCol = (i % 3) - 1 // changes the operation to perform on the col variable
    let rowModified = ((row + 1) + (itRow * (1 / size))) % 1 // alters the row value to return the row value of the neighbour
    let colModified = ((col + 1) + (itCol * (1 / size))) % 1 // alters the col value to return the col value of the neighbour
    if (i !== 4) { // prevents adding index being checked to list of neighbours
      let calc = Math.round(rowModified * size) + colModified // turns rowmod into an integer, adds colmod. New value represents coordinates of neighbour
      calc = Math.round(calc * size) // converts the calc value into the index number of the neighbour
      neighbours.push(calc)
    }
  }
  return neighbours
}

function findLiveNeighbours (field, neighbours) {
  let liveNeighbours = 0
  for (let i = 0; i < 8; i++) {
    liveNeighbours += field[neighbours[i]]
  }
  return liveNeighbours
}