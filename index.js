const blessed = require('blessed')



const screen = blessed.screen()
screen.render()
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
