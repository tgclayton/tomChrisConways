let game = require('../game.js')

test('make field produces an empty game board', () => {
  const expected = 36
  const ourGame = game.makeField(6)
  const actual = ourGame.length
  expect(actual).toBe(expected)
  console.log(ourGame)
})

test('find coordinates of cell', () => {
  const size = 4
  const cell = 10
  const expected = [2, 2]
  const actual = game.findCoordinates(size, cell)
  expect(actual).toEqual(expected)
})

test('check index addition simple', () => {
  // Arrange
  const index = 2
  const maxLength = 4

  // Act
  const expected = 3
  const actual = game.addOne(index, maxLength)

  // Assert
  expect(actual).toBe(expected)
})

test('check index subtraction simple', () => {
  // Arrange
  const index = 2
  const maxLength = 4

  // Act
  const expected = 1
  const actual = game.subOne(index, maxLength)

  // Assert
  expect(actual).toBe(expected)
})

test('check index addition complex', () => {
  // Arrange
  const index = 3
  const maxLength = 4

  // Act
  const expected = 0
  const actual = game.addOne(index, maxLength)

  // Assert
  expect(actual).toBe(expected)
})

test('check index subtraction complex', () => {
  // Arrange
  const index = 0
  const maxLength = 4

  // Act
  const expected = 3
  const actual = game.subOne(index, maxLength)

  // Assert
  expect(actual).toBe(expected)
})

test('check get neighbour indexes', () => {
  // Arrange
  const field = [0, 0, 0, 1,
    0, 0, 1, 1,
    1, 0, 1, 0,
    0, 0, 0, 1]
  const cellCoords = game.findCoordinates(Math.sqrt(field.length), 10)
  const row = cellCoords[0]
  const col = cellCoords[1]

  console.log('row: ' + row)
  console.log('col: ' + col)
  // Act
  const expected = [5, 6, 7, 9, 11, 13, 14, 15]
  const actual = game.getNeighboursIndex(Math.sqrt(field.length), row, col)
  // Assert
  expect(actual).toEqual(expected)
})

test('find neighbours of a cell simple', () => {
  const field = [0, 0, 0, 1,
    0, 0, 1, 1,
    1, 0, 1, 0,
    0, 0, 0, 1]
  const cell = 10
  const expected = 3
  const actual = game.findLiveNeighbours(field, cell)
  expect(actual).toBe(expected)
})

test('find neighbours of a cell complex', () => {
  const field = [0, 0, 0, 1,
    0, 0, 1, 1,
    1, 0, 1, 0,
    0, 0, 0, 1]
  const cell = 3
  const expected = 3
  const actual = game.findLiveNeighbours(field, cell)
  expect(actual).toBe(expected)
})
