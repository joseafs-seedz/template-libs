const { exec, execSync } = require('child_process')

execSync('node ./scripts/build')

exec('yarn publish', { cwd: './dist' }, (err, stout, stderr) => {
  if (err) {
    console.log(stderr)
  } else {
    console.log(stout)
  }
})
