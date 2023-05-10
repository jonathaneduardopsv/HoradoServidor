const express = require('express');
const app = express();

app.get('/',(req, res) => {
    let mensagem = {mensagem: 'Olá, mundo'};
    res.json(mensagem);
});

app.listen(8080, () => {
    let data = new Date();
    console.log('servidor node iniciado em: ' + data.getHours());
});