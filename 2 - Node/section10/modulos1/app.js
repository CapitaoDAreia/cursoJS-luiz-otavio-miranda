const mod1 = require('./mod1');
const axios = require('axios');
console.log(mod1.falaNome('igor', 'silva'))

axios('http://dog-api.kinduff.com/api/facts')
    .then(response=>console.log(response.data))
    .catch(e=>console.log(e))