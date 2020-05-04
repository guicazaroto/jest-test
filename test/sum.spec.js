const sum = require('../src/sum');

describe('test sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test('Test opposite', () => {
    expect(sum(1, 2)).not.toBe(0);
  });
})
