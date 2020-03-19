let game = require('../game.js')

test('make field produces an empty game board', () => {
  const expected = 16
  const actual = game.makeField(4).length
  expect(actual).toBe(expected)
})

test('find coordinates of cell', () => {
  const size = 4
  const cell = 10
  const expected = [2, 2]
  const actual = game.findCoordinates(size, cell)
  expect(actual).toEqual(expected)
})

test('find neighbours of a cell', () => {
  const field = [0, 0, 0, 1,
                 0, 0, 1, 1,
                 1, 0, 1, 0,
                 0, 0, 0, 1]
  const cell = field[10]
  const expected = 3
  const actual = game.findLiveNeighbours(field, cell).length
  expect(actual).toBe(expected)
})
