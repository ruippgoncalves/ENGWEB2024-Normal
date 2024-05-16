const express = require('express');
const contratos = require('../controllers/contratos.js');

const router = express.Router();

router.get('/', (req, res) => {
    if ('entidade' in req.query) {
        contratos.findByEntidade(req.query.entidade)
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error));
    } else if ('tipo' in req.query) {
        contratos.findByTipo(req.query.tipo)
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error));
    } else {
        contratos.list()
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error));
    }
});

router.post('/', (req, res) => {
    contratos.create(req.body)
        .then(() => res.sendStatus(201))
        .catch(error => res.status(500).jsonp(error));
});

router.get('/entidades', (req, res) => {
    contratos.getEntities()
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error));
});

router.get('/tipos', (req, res) => {
    contratos.getTipo()
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error));
});

router.get('/:id', (req, res) => {
    contratos.findById(req.params.id)
        .then(data => res.jsonp(data[0] || {}))
        .catch(error => res.status(500).jsonp(error));
});

router.put('/:id', (req, res) => {
    contratos.update(req.params.id, req.body)
        .then(() => res.sendStatus(204))
        .catch(error => res.status(500).jsonp(error));
});

router.delete('/:id', (req, res) => {
    contratos.remove(req.params.id)
        .then(() => res.sendStatus(204))
        .catch(error => res.status(500).jsonp(error));
});

module.exports = router;
