const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

describe('test arrays and itarables', () => {
  test('Check if contain', () => {
    expect(shoppingList).toContain('beer')
  })
})