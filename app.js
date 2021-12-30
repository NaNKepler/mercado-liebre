const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html')));

app.listen(process.env.PORT ||3000, function() {
    console.log("Belleza de servidor FUNCIONANDO por puerto 3000");
})
