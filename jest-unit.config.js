module.exports = {
  rootDir: './',
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts'],
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/src/**/*.ts'],
  testRegex: 'test/.*\\.unit\\.ts$',
  coveragePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
};
