const mongoose = require('mongoose');

const contratosSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    dataCelebracaoContrato: {type: String, required: true},
    dataPublicacao: {type: String, required: true},
    entidade_comunicante: {type: String, required: true},
    fundamentacao: {type: String, required: true},
    nAnuncio: {type: String},
    NIPC_entidade_comunicante: {type: String, required: true},
    objectoContrato: {type: String, required: true},
    prazoExecucao: {type: String, required: true},
    precoContratual: {type: Number, required: true},
    tipoprocedimento: {type: String, required: true},
}, {collection: 'contratos', versionKey: false});

module.exports = mongoose.model('contratos', contratosSchema);
