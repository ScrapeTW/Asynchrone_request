const request = require("request")

const asynch_request = (url, callback) => {
  request(url, (error, response) => {
    if(error){
      callback(error, undefined)
    } else {
      callback("No error", response)
    }   
  })
}

module.exports = asynch_request
