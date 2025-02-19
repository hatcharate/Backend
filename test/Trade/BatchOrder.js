const Spot = require('../src/spot')
const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://api.mexc.com' })


client.BatchOrders({ batchOrders: [{ "type": "LIMIT", "price": "XX", "quantity": "XX", "symbol": "MXUSDT", "side": "BUY" }, { "type": "LIMIT", "price": "XX", "quantity": "XX", "symbol": "MXUSDT", "side": "BUY" }] })
    .then(response => client.logger.log(response.data))