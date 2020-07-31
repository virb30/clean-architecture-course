module.exports = {
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  coverageReporters: ['text-summary', 'lcov'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  preset: '@shelf/jest-mongodb'
}
