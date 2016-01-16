
module.exports.get = {
  "*" : function (req, res) {
    res.end('welcome Get');
  },
  "hello" : function (req, res) {
    res.end('hello Get');
  }
};

module.exports.post = {
  "" : function (req, res) {
    res.end('welcome Post');
  },
  "hello" : function (req, res) {
    res.end('hello Post');
  }
};
