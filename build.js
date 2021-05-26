// const values
const process = require("process");
const child_process = require("child_process");
const fs = require("fs");
const fse = require("fs-extra");
const glob = require("glob");
const rmdir = require('rimraf');

const vscodeVersion = "1.56.0"

if (!fs.existsSync("vscode")) {
    child_process.execSync("git clone https://github.com/microsoft/vscode.git", {
      stdio: "inherit",
    });
  }