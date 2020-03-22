module.exports = displayEnvironment

const blessed = require('blessed')

const screen = blessed.screen()
const box = blessed.box({
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  tags: true,
  style: {
    fg: 'yellow',
    bg: 'black'
  }
})
screen.append(box)

screen.key(['escape', 'q', 'C-c'], () => process.exit(0))

function createFrame (board) {
  const boardSize = Math.sqrt(board.length)
  let newBoard = board.map((node) => {
    if (node) {
      return '❄ '
    } else {
      return '  '
    }
  })
  for (var i = 1; i < boardSize; i++) {
    newBoard.splice((boardSize * i + i - 1), 0, '\n')
  }
  return newBoard.join('')
}

function displayEnvironment (environment) {
  const frame = createFrame(environment)
  box.setContent(frame)
  screen.render()
}
