let game = require('../game.js')

test('make field produces an empty game board', () => {
  const expected = 16
  const actual = game.makeField(4).length
  expect(actual).toBe(expected)
})
