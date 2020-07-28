module.exports = {
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  roots: ["<rootDir>/src"],
  coverageReporters: ["text-summary", "lcov"],

  testEnvironment: "node",
  testMatch: ["*.spec.ts"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
