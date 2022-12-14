import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  globals: {
    "ts-jest": {
      isolatedModules: false,
    },
  },
  roots: ["<rootDir>"],
  moduleNameMapper: {
    "@algorithms/(.*)": "<rootDir>/src/algorithms/$1",
    "@contracts/(.*)": "<rootDir>/src/contracts/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
  },
};
export default config;
