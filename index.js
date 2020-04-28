const chokidar = require('chokidar');
const exec = require('child_process').exec;
const path = require('path');

process.chdir(path.dirname(__filename));
process.env.ProjectFilePath = path.resolve(process.env.ProjectFilePath);

if (!process.env.ProjectFilePath)
    throw "Project file path not specified.";


if (!process.env.ProjectName)
    throw "Project name not specified";

console.log(`Watching ${process.env.ProjectFilePath}`)

chokidar.watch(process.env.ProjectFilePath).on('change', () => {
    exec("PowerShell -ExecutionPolicy Bypass -File .\\localdeploy.ps1", function(err, stdout, stderr) {
        if (err)
            throw err;
        console.log(stdout);
        console.log(stderr);
    });
});