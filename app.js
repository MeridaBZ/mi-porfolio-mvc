const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const mainRouter = require('./routers/main');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/', mainRouter);


app.listen(port, () => console.log(`Servidor funcionando en http://localhost:${port}`));