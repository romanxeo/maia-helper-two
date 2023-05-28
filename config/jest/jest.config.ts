import path from 'path';

export default {
  preset: 'ts-jest',
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    'node_modules',
  ],
  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  // for absolute imports in tests
  modulePaths: [
    '<rootDir>src',
  ],
  // for include scss in components for tests components
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
  // The root directory that Jest should scan for tests and modules within
  rootDir: '../../',
  // for tests components
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  // The glob patterns Jest uses to detect test files
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
  },
};
