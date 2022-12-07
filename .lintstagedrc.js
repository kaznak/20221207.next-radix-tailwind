const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const prettierCommand = (filenames) =>
  `prettier -w ${filenames.map((f) => path.relative(process.cwd(), f))}`

module.exports = {
  '*': [prettierCommand],
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
