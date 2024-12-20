const express = require('express');
const client = require('prom-client')

const app = express();
const requestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Numero total de peticiones http'
});

app.get('/', (req, res) => {
    requestCounter.inc();
    res.send('Hello world metricas!!');
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    const metrics = await client.register.metrics();
    res.end(metrics);
});

app.listen(8080, () => {
    console.log('Server running on port 8080')
});
