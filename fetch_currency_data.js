const fetch = require('node-fetch');

fetch('https://westinpay.com/currency/fiat_api?api_key=YOUR-API-KEY&base=USD&output=JSON')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
