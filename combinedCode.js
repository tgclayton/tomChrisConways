module.exports = {
  makeField,
  findLiveNeighbours,
  findCoordinates,
  addOne,
  subOne,
  getNeighboursIndex,
  nextGeneration,
  displayBoard,
  countAlive
  // tomNeighbours
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



function displayBoard (board) {
  let display = ''
  let boardWidth = Math.sqrt(board.length)
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 0) {
      display += ' '
    } else {
      display += 'X'
    }
    if (i % boardWidth === 0) {
      display += '\n'
    }
  }
  return display
}

function countAlive (board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 1) {
      return true
    }
  }
  return false
}
