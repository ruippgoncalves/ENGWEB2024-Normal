var express = require('express');
const axios = require('axios');
var router = express.Router();

const api = 'http://web_api_server:16000/';

/* GET home page. */
router.get('/', function (req, res, next) {
    // use axios and get the data from the API before rendering the page
    axios.get(api + 'contratos/')
        .then(response => {
            res.render('index', {title: 'Contratos', contratos: response.data});
        })
        .catch(error => {
            res.render('error', {message: error.message, error: error});
        });
});

router.get('/:id', function (req, res, next) {
    axios.get(api + 'contratos/' + req.params.id)
        .then(response => {
            res.render('contrato', {title: 'Contrato', contrato: response.data});
        })
        .catch(error => {
            res.render('error', {message: error.message, error: error});
        });
});

router.get('/entidades/:id', function (req, res, next) {
    axios.get(api + 'contratos?entidade=' + req.params.id)
        .then(response => {
            let entidade = response.data[0].entidade_comunicante;
            let contratos = response.data;
            let somatorio = 0;

            contratos.forEach(contrato => somatorio += contrato.precoContratual);

            res.render('entidade', {
                title: 'Entidade',
                entidade: {NIPC: req.params.id, Nome: entidade},
                contratos,
                somatorio,
            });
        })
        .catch(error => {
            res.render('error', {message: error.message, error: error});
        });
});

module.exports = router;
