// 更新package.json中的版本号
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";
import semver from "semver";
import { execSync } from "child_process";

// 获取当前文件的绝对路径
const __filename = fileURLToPath(import.meta.url);

// 获取当前文件的目录
const __dirname = path.dirname(__filename);

// 获取根目录
const root = path.resolve(__dirname, "../");

// 获取package.json的绝对路径
const packageJsonPath = path.resolve(__dirname, "../package.json");

const packageJson = fs.readJsonSync(packageJsonPath);

const version = packageJson.version;

const versionChoices = [
  {
    name: `patch (${version} => ${semver.inc(version, "patch")})`,
    value: "patch",
  },
  {
    name: `minor (${version} => ${semver.inc(version, "minor")})`,
    value: "minor",
  },
  {
    name: `major (${version} => ${semver.inc(version, "major")})`,
    value: "major",
  },
];

const { release } = await inquirer.prompt([
  {
    type: "list",
    name: "release",
    message: "Select release type",
    choices: versionChoices,
  },
]);

const newVersion = semver.inc(version, release);

packageJson.version = newVersion;

fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });

execSync("git add .", { stdio: "inherit" });

execSync(`git commit -m "release: ${newVersion}"`, { stdio: "inherit" });

execSync(`git tag v${newVersion}`, { stdio: "inherit" });

execSync("git push", { stdio: "inherit" });
