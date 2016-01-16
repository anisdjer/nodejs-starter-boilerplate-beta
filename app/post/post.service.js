PostService.dependencies = ["user"];
function PostService(user) {
  this.title = "Anis Blog";
  this.user = user;

}

module.exports = PostService;
