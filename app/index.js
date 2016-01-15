
var router = require('./router');

function App() {

}

App.prototype.start = function () {
  router.listen(8800, function () {
    console.log("Server running on 8800\npaths :\n\r", router.paths.join("\n"));
  });
};

module.exports = (function () {
  return new App();
}());
