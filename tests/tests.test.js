let game = require('../game.js')

test('make field produces an empty game board', () => {
  const expected = 36
  const ourGame = game.makeField(6)
  const actual = ourGame.length
  expect(actual).toBe(expected)
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

test('decide what to do with cell in next generation', () => {
  const field = [0, 0, 0, 0,
    0, 1, 0, 0,
    1, 1, 0, 0,
    0, 0, 0, 0]
  // console.log('index 8 has', game.findLiveNeighbours(field, 8))
  const expected = [0, 0, 0, 0,
    1, 1, 0, 0,
    1, 1, 0, 0,
    0, 0, 0, 0]
  const actual = game.nextGeneration(field)
  // console.log('ac is', actual)
  // console.log('ex is', expected)

  expect(actual).toEqual(expected)
})

test('check if my function finds correct neighbours', () => {
  const expected = [4, 5, 7, 11, 9, 15, 12, 13]
  const actual = game.tomNeighbours(8, 4)
  console.log(actual)
  expect(actual).toEqual(expected)
})
