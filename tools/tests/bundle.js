var selftest = require('../selftest.js');
var Sandbox = selftest.Sandbox;
var path = require("path");
var files = require("../files.js");

selftest.define("bundle", ["slow"], function () {
  var s = new Sandbox();
  var run;

  s.createApp("myapp", "standard-app");
  s.cd("myapp");
  run = s.run("bundle", "myapp.tgz");
  run.waitSecs(60);
  run.expectExit(0);

  var tarball = path.join(s.cwd, "myapp.tgz");
  selftest.expectEqual(files.exists(tarball), true);
});
