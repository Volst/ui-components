// Disclaimer: this purposefully uses the built files from dist/ by importing from package.json,
// because we want to check if the declarations do not throw an error.
// Unfortunately TypeScript can generate invalid declarations.
// If this test is failing and you want to see if your fix works, just run `yarn build` before testing.
import { TextInput, Content } from '..';

test('import random component to be sure declarations work', () => {
  expect(TextInput).toBeInstanceOf(Function);
});
