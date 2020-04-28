const chokidar = require('chokidar');
const execFile = require('child_process').exec;

if (!process.env.ProjectFilePath)
    throw "Project file path not specified.";


if (!process.env.ProjectName)
    throw "Project name not specified";

chokidar.watch(process.env.ProjectFilePath).on('change', () => {
    execFile('./localdeploy.ps1');
});