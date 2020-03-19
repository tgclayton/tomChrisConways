module.exports = {
  makeField
}

function makeField (size) {
  let field = []
  for (let i = 0; i < size * size; i++) {
    field.push(0)
  }
  return field
}
