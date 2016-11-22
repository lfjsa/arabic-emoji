const emoticons = require('./src/emoticons.json')

emoticons.forEach(generateEmoticonItem)

function generateEmoticonItem (emoticon) {
  return `<li>
    <h2>${emoticons.figure}</h2>
    <span>${emoticons.text}</span>
  </li>`
}
