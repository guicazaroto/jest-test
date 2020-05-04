const sum = 3 + 3

describe('test numbers', () => {
  test('Comparing numbers', () => {
    expect(sum).toBeGreaterThan(5)
    expect(sum).toBeGreaterThanOrEqual(6);
    expect(sum).toBeLessThan(7);
    expect(sum).toBeLessThanOrEqual(7);
  })
  
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });
})