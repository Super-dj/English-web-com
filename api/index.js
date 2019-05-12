var dyson = require("dyson");

dyson.bootstrap({
  configDir: __dirname,
  port: 5000
});

console.log("Mock server is Up & Running at http://localhost:5000");
