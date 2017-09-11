// require `request` and the Node `fs` (filesystem) module
var request = require("request");
var fs = require("fs");

request
  .get("https://sytantris.github.io/http-examples/future.jpg", () => {
    console.log('Done Writing!');
  })
  .on("error", function(err) {
    throw err;
  })
  .on("response", function(response) {
    console.log('Downloading Image...');
    console.log("Response Status Code: ", response.statusCode);
    console.log("Response Status Message: ", response.statusMessage);
    console.log("Response Content Type: ", response.headers["content-type"]);
  })
  .on('end', () => {
    console.log("Download Complete.");
  })
  .pipe(fs.createWriteStream("./future.jpg"));

  // Downloading Image...
  // Response Status Code:  200
  // Response Status Message:  OK
  // Response Content Type:  image/jpeg
  // Download Complete.
  // Done Writing!
  
