// require `request` and the Node `fs` (filesystem) module
var request = require("request");
var fs = require("fs");

console.log('Downloading Image...');

request
  .get("https://sytantris.github.io/http-examples/future.jpg")
  .on("error", function(err) {
    throw err;
  })
  .on("response", function(response) {
    console.log("Response Status Code: ", response.statusCode);
    console.log("Response Status Message: ", response.statusMessage);
    console.log("Response Content Type: ", response.headers["content-type"]);
  })
  .on('end', () => {
    console.log("Download Complete.");
  })
  .pipe(fs.createWriteStream("./future.jpg").on('end', () => {
    console.log('Done Writing!');
  }));



  // Downloading Image...
  // Response Status Code:  200
  // Response Status Message:  OK
  // Response Content Type:  image/jpeg
  // Download Complete.
  // Done Writing!
  
