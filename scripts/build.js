const { execSync } = require('child_process')

execSync('rm -rf dist')

execSync('tsc --build tsconfig.cjs.json', (err, stderr) => {
  if (err) {
    console.log(stderr)
  }
})

execSync('node ./scripts/addPackageJson.js')

