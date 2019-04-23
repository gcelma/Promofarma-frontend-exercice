const {defaults} = require('jest-config')

// jest.config.js
module.exports = {
  verbose: true,
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/'
  ]
}
