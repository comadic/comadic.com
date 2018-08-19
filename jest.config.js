module.exports = {
  testMatch: ['**/__tests__/*.test.js'],
  setupTestFrameworkScriptFile: './setup-jest.js',
  moduleNameMapper: {
    '\\.(s?css|svg|png|jpe?g)$': '<rootDir>/node_modules/jest-css-modules',
  },
  // transformIgnorePatterns: ['node_modules/(?!(my-project|other-project)/)'],
};
