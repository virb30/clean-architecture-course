module.exports = {
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  roots: ["<rootDir>/src"],
  coverageReporters: ["text-summary", "lcov"],
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
