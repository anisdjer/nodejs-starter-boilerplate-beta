var glob = require("glob"),
  express = require('express'),
  router = express(),

  forbiddenMethods = ["listen", "use"],

  controllers = glob.sync("app/**/*.controller.js"),

  parsed = false, controller, modulePrefix = "", paths = [], i, method, path, route;



function makeRouter() {

  if (parsed) return router;

  for(i = 0, l = controllers.length; i < l; i +=1) {
    console.log("router");
    controller = require(controllers[i]);
    modulePrefix = controllers[i].substr(controllers[i].lastIndexOf("/") + 1).replace(".controller.js", "")

    for(method in controller) {

      if (forbiddenMethods.indexOf(method) >= 0) continue;

      for(path in controller[method]) {
        route = "/" + modulePrefix + "/" + path;
        if (path.charAt(0) === '/') {
          route = path;
        }
        router[method](route, controller[method][path]);
        paths.push(method + " " + route);
      }
    }
  }

  router.paths = paths;
  parsed = true;
  return router;
};


module.exports = makeRouter;
