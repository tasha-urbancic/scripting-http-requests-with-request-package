// require `request` module
var request = require("request");

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on("error", function(err) {
    throw err;
  })
  .on("response", function(response) {
    console.log("Response Status Code: ", response.statusCode);
    console.log("Response Status Message: ", response.statusMessage);
    console.log("Response Content Type: ", response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg'));