const CODES = {
  A: 65,
  Z: 90
}

function createCell(_, index) {
  return `<div class="cell" contenteditable="true"></div>`
}

function createRow(index, content) {
  return `
    <div class="row">
      <row class="row-info">${index ? index : ''}</row>
      <div class="row-data">
        ${content}
      </div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

function toColumn(col) {
  return `<div class="column">${col}</div>`
}

export function createTable(rowsCount = 15) {
  const rows = []

  const colsCount = CODES.Z - CODES.A + 1
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(createRow(null, cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('')
    rows.push(createRow(i + 1, cells))
  }

  return rows.join('')
}
