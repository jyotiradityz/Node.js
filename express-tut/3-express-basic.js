const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar/index.html'));
});

app.all('*', (req, res) => {
    res.status(404).send('Wrong Side maybe');
});

app.listen(5000, () => {
    console.log('Listening on 5000 port');
});