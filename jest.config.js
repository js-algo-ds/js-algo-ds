module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.+(js)', '**/?(*.)+(spec|test).+(js)'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
};
