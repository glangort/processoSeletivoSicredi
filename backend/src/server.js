const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('./database');

var porta = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(porta);
