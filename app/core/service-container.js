
var glob = require("glob"),
  services = glob.sync("app/**/*.service.js"),
  serviceContainer = {},

  parsed = false, service, name = "", i, l;

function makeContainer() {

  if (parsed) return serviceContainer;

  for(i = 0, l = services.length; i < l; i += 1) {

    service = require(services[i]);

    name = services[i]
        .substr(services[i].lastIndexOf("/") + 1)
        .replace(".service.js", "");

    serviceContainer[name] = service;

  }

  parsed = true;

  function getService(name) {
    var service = serviceContainer[name],
      result = {},
      dependencies = [];

    if (service.$$resolved) return service;

    for(i = 0, l = (service.dependencies || []).length; i < l; i += 1) {
      try {
        dependencies.push(this.get(service.dependencies[i]));
      } catch (e) {
        throw "Instantiation of " + name + " : Circular dependency : " + service.dependencies[i];
      }
    }


    function Result() {
      service.apply(this, dependencies);
    }
    Result.prototype = Object.create(service.prototype);

    result = new Result();
    result.$$resolved = true;
    serviceContainer[name] = result;


    return result;
  }


  return {
    get : getService
  };
};



module.exports = makeContainer;
