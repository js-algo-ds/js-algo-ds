module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.+(js)",
    "**/?(*.)+(spec|test).+(js)"
  ],
  coverageReporters: [
    "json-summary", 
    "text",
    "lcov"
  ]
}