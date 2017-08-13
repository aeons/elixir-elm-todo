const path = require('path');

module.exports = {
  entry: "./js/app.js",
  output: {
    path: path.resolve(__dirname, "../priv/static/js"),
    filename: "app.js"
  }
}
