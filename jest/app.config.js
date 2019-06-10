const baseConfig = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/../jest/setup.ts'],
  transformIgnorePatterns: ['node_modules/(?!@ngrx)', 'cypress/'],
  moduleNameMapper: {
    "/^src\/(.*)$/": "<rootDir>/../src/$1"
  },
  globals: {	  
    "ts-jest": {    
      "tsConfig": "./tsconfig.spec.json",
      // "diagnostics": false
    }
  },
}

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/../src'],
  modulePaths: ['<rootDir>/../dist']
}