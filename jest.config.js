module.exports = {
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '!<rootDir>/src/**/*protocols.ts',
    '!<rootDir>/src/**/protocols/**',
    '!<rootDir>/src/main/**'
  ],
  coverageReporters: ['text-summary', 'lcov'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  preset: '@shelf/jest-mongodb'
}
