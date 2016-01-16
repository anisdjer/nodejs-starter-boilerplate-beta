function UserService() {
  var username = "Anis",
    password = "anis";

  this.getUserName = function () {
    return username;
  };

  this.getPassword = function () {
    return password;
  };
}

UserService.prototype.login = function (username, password) {
  if(this.getUserName() === username && this.getPassword() === password) {
    return true;
  }
  return false;
};

module.exports = UserService;
