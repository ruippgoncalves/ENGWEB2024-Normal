const express = require('express');
const mongoose = require("mongoose");
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const contratosRouter = require('./routes/contratos.js');
const path = require('path');

const MONGO_DB_CON_STRING = 'mongodb://web_test_db/contratos';
mongoose.connect(MONGO_DB_CON_STRING);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB'));
db.once('open', () => {
    console.log("Conexão ao MongoDB realizada com sucesso");
});

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/contratos', contratosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.jsonp(err);
});

module.exports = app;
