const { exec } = require('child_process');

// This command builds .aar in platforms/android folder.ƒ
console.log(`executing 'tns plugin build'`);
exec('ns plugin build', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    console.log(`${err}`);
    return;
  }
});
