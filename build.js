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
process.chdir("vscode");

child_process.execSync(`git checkout -q ${vscodeVersion}`, {
    stdio: "inherit",
});

if (!fs.existsSync("node_modules")) {
    child_process.execSync("yarn", { stdio: "inherit" });
}

fs.copyFileSync(
    "../workbench.ts",
    "src/vs/code/browser/workbench/workbench.ts"
);

const gulpfilePath = "./build/gulpfile.vscode.js";
let gulpfile = fs.readFileSync(gulpfilePath, { encoding: "utf-8", flag: "r"});


gulpfile = gulpfile
  .replace(
    /vs\/workbench\/workbench.desktop.main/g,
    "vs/workbench/workbench.web.api"
  )
  .replace(
    /buildfile.workbenchDesktop/g,
    "buildfile.workbenchWeb,buildfile.keyboardMaps"
  );

fs.writeFileSync(gulpfilePath, gulpfile);
