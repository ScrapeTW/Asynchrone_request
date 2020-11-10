const async_request = require("./utils/async.js")

const tab = ["https://www.google.fr", "https://www.youtube.com", "https://github.com", "https://www.udemy.com", "https://www.pagesjaunes.fr/", "https://fr.wikipedia.org"]

tab.forEach(url => {
  async_request(url, (error, response) => {
    console.log("Le status code du site " + url + " est de : " + response.statusCode)
  })
})


