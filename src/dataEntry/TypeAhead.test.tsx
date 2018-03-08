import { addFlatIndexToOptions } from './TypeAhead';

test('addFlatIndexToOptions', () => {
  const options = [
    { value: 'a' },
    { value: 'b', options: [{ value: 'c' }, { value: 'd' }] },
    { value: 'e' },
  ];
  const newOptions = addFlatIndexToOptions(options);
  expect(newOptions).toEqual([
    { value: 'a', index: 0 },
    {
      value: 'b',
      options: [{ value: 'c', index: 1 }, { value: 'd', index: 2 }],
    },
    { value: 'e', index: 3 },
  ]);
});
