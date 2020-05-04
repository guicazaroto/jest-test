const axios = require('axios')

function checkCep (cep) {
  return axios.
    get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.data)
}

module.exports = checkCep