
var core = require('./core');

function App() {

}

App.prototype.start = function () {

  core.router().listen(8800, function () {
    console.log("Server running on 8800\npaths :\n\r", core.router().paths.join("\n"));
  });

};

module.exports = (function () {
  return new App();
}());
