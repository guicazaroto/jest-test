const objToArr = require('../src/objectToArray')

describe('test number to array conversor', () => {
  test('convert object to array', () => {
    const data = objToArr({
      bala: { tipo: 'doce' },
      chiclete: { tipo: 'doce' },
      pirulito: { tipo: 'doce' }
    })
    
    expect(data).toEqual(['bala', 'chiclete', 'pirulito'])
  })
})