console.log(createElement('div', ['one', 'two']))

function createElement (element, classes = [], content) {
  return `<div class="${classes}"></div>`
}
