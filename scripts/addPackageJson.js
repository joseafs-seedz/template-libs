const fs = require('fs')

fs.readFile('package.json', 'utf8', (readErr, data) => {
  if (readErr) {
    console.log(readErr)
  }

  const packageJson = JSON.parse(data)

  const fieldsToDelete = ['scripts', 'devDependencies', 'husky', 'lint-staged']

  const dependenciesToDelete = [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addons',
    '@storybook/react',
    '@storybook/theming',
    '@svgr/webpack',
    '@testing-library/jest-dom',
    '@testing-library/react',
  ]

  fieldsToDelete.forEach((field) => delete packageJson[field])

  dependenciesToDelete.forEach((dep) => delete packageJson.dependencies[dep])

  fs.writeFile(
    `${__dirname}/../dist/package.json`,
    JSON.stringify(packageJson),
    (writeErr) => {
      if (writeErr) {
        console.log(writeErr)
      }
    }
  )
})
