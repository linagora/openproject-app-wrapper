process.env.TZ = 'UTC'

module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'styl'],
  setupFilesAfterEnv: ['<rootDir>/test/jestLib/setupAfterEnv.js'],
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '\\.(png|gif|jpe?g|svg)$': '<rootDir>/test/__mocks__/fileMock.js',
    '.styl$': 'identity-obj-proxy',
    '^@/(.*)': '<rootDir>/src/$1',
    '^src/(.*)': '<rootDir>/src/$1',
    '^test/(.*)': '<rootDir>/test/$1'
  },
  transformIgnorePatterns: ['node_modules/(?!cozy-ui)'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  }
}
