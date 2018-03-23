import { addFlatIndexToOptions } from './TypeAhead';

test('addFlatIndexToOptions', () => {
  const options = [
    { value: 'a', label: 'A' },
    {
      value: 'b',
      label: 'B',
      options: [{ value: 'c', label: 'C' }, { value: 'd', label: 'D' }],
    },
    { value: 'e', label: 'E' },
  ];
  const newOptions = addFlatIndexToOptions(options);
  expect(newOptions).toEqual([
    { value: 'a', label: 'A', index: 0 },
    {
      value: 'b',
      label: 'B',
      options: [
        { value: 'c', label: 'C', index: 1 },
        { value: 'd', label: 'D', index: 2 },
      ],
    },
    { value: 'e', label: 'E', index: 3 },
  ]);
});
