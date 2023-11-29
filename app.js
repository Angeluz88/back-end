const express = require('express');
const cors = require('cors')
const logger = require('morgan');
require(`dotenv`).config();

const indexRouter = require('./routes/index');
const productRouter = require('./routes/products');
const apiRouter = require('./routes/api');
const {dbConnection} = require('./db/db');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


app.use('/', indexRouter);
app.use('/productos', productRouter);
app.use('/api', apiRouter)
dbConnection();

module.exports = app;
