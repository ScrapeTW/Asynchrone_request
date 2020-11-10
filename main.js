const async_request = require("./utils/async.js")

const tab = ["https://www.google.fr", "https://www.youtube.com", "https://www.lilleweb.fr", "https://www.bateauamorceur.com"]

tab.forEach(url => {
  async_request(url, (error, response) => {
    console.log("Le status code du site " + url + " est de : " + response.statusCode)
  })
})


