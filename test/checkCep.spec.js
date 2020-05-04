const checkCep = require('../src/checkCep')

test('Should returns CEP', async () => {
  const address = await checkCep(29141752)
  expect(address).toMatchObject({
    cep: expect.any(String),
    logradouro: expect.any(String),
    complemento: expect.any(String),
    bairro: expect.any(String),
    localidade: expect.any(String),
    uf: expect.any(String),
    unidade: expect.any(String),
    ibge: expect.any(String),
    gia: expect.any(String)
  })
})