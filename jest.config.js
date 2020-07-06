// Documentation for the Jest configuration (used by this file) at
// https://jestjs.io/docs/en/configuration.html and https://www.gatsbyjs.org/docs/unit-testing/

/**
 * A list of file extensions to stub upon import, since they can not (and should not) be parsed by
 * Jest.
 */
const fileMockExtensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'eot',
  'otf',
  'webp',
  'svg',
  'ttf',
  'woff',
  'woff2',
  'mp4',
  'webm',
  'wav',
  'mp3',
  'm4a',
  'aac',
  'oga',
  'md',
].join('|');

/**
 * Mapping the above array of stubs to the mock files in the folder above.
 */
const moduleNameMapper = {
  [`.+\\.(${fileMockExtensions})$`]: '<rootDir>/jest.stub.js',
};

/**
 * Configures all `.ts`/`.tsx` files to be tested with the `ts-jest` library instead of the regular
 * `jest` library.
 */
const transform = {
  '^.+\\.tsx?$': 'ts-jest',
};

/**
 * Regular expression that instructs Jest to consider all files that end in one of the
 * following as Jest tests:
 * - `.test.ts`
 * - `.test.tsx`
 */
const testRegex = 'src/.*\\.test\\.(tsx?)';

/**
 * Folders to ignore when running Jest
 */
const testPathIgnorePatterns = ['node_modules', '.cache', '.history', '__snapshots__'];

/**
 * Configuration file to pass to Jest
 */
const config = {
  transform,
  testRegex,
  testPathIgnorePatterns,
  moduleNameMapper,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = config;
