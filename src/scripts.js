(function () {
  getStuff('src/emoticons.json', function (response) {
    var emoticons = JSON.parse(response)
    console.log('dwdq', emoticons)
  })

  /**
  * generic ajax thing
  */
  function getStuff (url, cb) {
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = function () {
      cb(request.responseText)
    }
    request.onerror = function () {
      console.error('failed to load stuff from ' + url)
    }
    request.send()
  }
}())
