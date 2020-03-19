module.exports = {
  makeField,
  findLiveNeighbours,
  findCoordinates
}

function makeField (size) {
  let field = []
  for (let i = 0; i < size * size; i++) {
    field.push(0)
  }
  return field
}

function findLiveNeighbours (field, cell) {
  const live = 0
  let cellCoord = findCoordin
  return live
}

function findCoordinates (size, cell) {
  const col = cell % size
  const row = (cell - col) / size
  return [row, col]
}
