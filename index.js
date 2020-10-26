const http = require('http');
const express =  require('express');
const app =  express();
const port =  process.env.PORT  ||  3000


var calculator = require('./calculator');

var a=10,b=5;


app.get('/', (req, res) => {
    return res.status(200).json({ valorA:  a, valorB: b });
});

app.get('/adicao', (req, res) => {
    return res.status(200).json({ resultado:  calculator.add(a,b) });
});

app.get('/subtracao', (req, res) => {
    return res.status(200).json({ resultado:  calculator.subtract(a,b) });
});

app.get('/multi', (req, res) => {
    return res.status(200).json({ resultado:  calculator.multiply(a,b) });
});


let server = app.listen(port, () => {
    console.log(`Application running on ${port}`);
});

