var serviceContainer = require("app/core").serviceContainer();

var postService = serviceContainer.get("post");
console.log(postService);
module.exports.get = {
  "" : function (req, res) {

    res.end('welcome Get user has post title ' + postService.title);
  },
  "hello" : function (req, res) {
    res.end('hello Get user');
  }
};

module.exports.post = {
  "" : function (req, res) {
    res.end('welcome Post user');
  },
  "hello" : function (req, res) {
    res.end('hello Post user');
  }
};
