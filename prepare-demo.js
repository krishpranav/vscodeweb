var fs = require("fs");
const fse = require("fs-extra");
const child_process = require("child_process");

if (fs.existsSync("./demo/dist")) {
    fs.rmdirSync("./demo/dist", { recursive: true });
  }
  