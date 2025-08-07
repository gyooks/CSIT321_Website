const ghpages = require("gh-pages");

ghpages.publish("dist", function (err) {
  if (err) {
    console.error("Deployment failed:\n", err);
  } else {
    console.log("Deployment successful!");
  }
});