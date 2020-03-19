module.exports = {
  makeField,
  findLiveNeighbours,
  findCoordinates,
  addOne,
  subOne,
  getNeighboursIndex,
  nextGeneration,
  tomNeighbours
}

function makeField (size) {
  let field = []
  for (let i = 0; i < size * size; i++) {
    let rand = Math.random()
    if (rand > 0.6) {
      field.push(1)
    } else {
      field.push(0)
    }
  }
  return field
}

function findLiveNeighbours (field, cell) {
  let live = 0
  let size = Math.sqrt(field.length)
  let cellCoords = findCoordinates(size, cell)
  let row = cellCoords[0]
  let col = cellCoords[1]
  let neighboursIndex = getNeighboursIndex(size, row, col)

  // check if cell equates to 1
  for (let i = 0; i < neighboursIndex.length; i++) {
    if (field[neighboursIndex[i]] === 1) {
      live++
    }
  }

  return live
}

function findCoordinates (size, cell) {
  const col = cell % size
  const row = (cell - col) / size
  return [row, col]
}
function addOne (index, maxLength) {
  if (index === maxLength - 1) {
    return 0
  } else {
    return index + 1
  }
}

function subOne (index, maxLength) {
  if (index === 0) {
    return maxLength - 1
  } else {
    return index - 1
  }
}

function getNeighboursIndex (size, row, col) {
  let indexes = []
  indexes.push(subOne(row, size) * size + subOne(col, size))

  indexes.push(subOne(row, size) * size + col)

  indexes.push(subOne(row, size) * size + addOne(col, size))

  indexes.push(row * size + subOne(col, size))

  indexes.push(row * size + addOne(col, size))

  indexes.push(addOne(row, size) * size + subOne(col, size))

  indexes.push(addOne(row, size) * size + col)

  indexes.push(addOne(row, size) * size + addOne(col, size))

  return indexes
}

function nextGeneration (field) {
  let nextField = []
  for (let i = 0; i < field.length; i++) {
    let f = field[i]
    if (f === 0 && findLiveNeighbours(field, i) === 3) {
      f = 1
    } else if (f === 1 && findLiveNeighbours(field, i) === (2 || 3)) {
      f = 1
    } else {
      f = 0
    }
    nextField.push(f)
  }
  return nextField
}

function tomNeighbours (ind, size) { // index being looked up, square root of array length
  let neighbours = []
  let itRow = 0
  let itCol = 0
  let col = (ind / size) % 1
  let row = (Math.ceil(ind / size) * (1 / size))
  // console.log(ro
  for (let i = 0; i < 9; i++) {
    itRow = Math.floor(i / 3) - 1
    itCol = (i % 3) - 1
    if (i !== 4) {
      let calc = Math.round((((row + (itRow * (1 / size))) % 1 ) * size)) + (((itCol * (1 / size)) + (1 + col)) % 1)
      neighbours.push(Math.round(calc * size))
    }
  }
  console.log(neighbours)
  return neighbours
}

tomNeighbours(12, 4)
// (row + (itRow * (1 / size))) + (col + (itCol * (1 / size)))

// console.log((itCol * (1 / size)) + (1 + col) % 1)
