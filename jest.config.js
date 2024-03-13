module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFiles: ['<rootDir>/setup.jest.js'],
    globals: {
      Uint8Array: Uint8Array,
    },
    //transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
    transform: {
      '^.+.[tj]sx?$': [
        'babel-jest',
      ],
    },
  };