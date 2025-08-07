const ghpages = require("gh-pages");

ghpages.publish("dist", {
  repo: "https://github.com/gyooks/CSIT321_Website.git",
  branch: "gh-pages"
}, function (err) {
  if (err) {
    console.error("Deployment failed:\n", err);
  } else {
    console.log("Deployment successful!");
  }
});
