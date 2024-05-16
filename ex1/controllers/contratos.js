const Contrato = require("../models/contratos.js");

module.exports = {
    list() {
        return Contrato.find().exec();
    },

    findById(id) {
        return Contrato.find({_id: id}).exec();
    },

    findByEntidade(ent) {
        return Contrato.find({NIPC_entidade_comunicante: ent}).exec();
    },

    findByTipo(tp) {
        return Contrato.find({tipoprocedimento: tp}).exec();
    },

    getEntities() {
        return Contrato.distinct("entidade_comunicante").sort();
    },

    getTipo() {
        return Contrato.distinct("tipoprocedimento").sort();
    },

    create(data) {
        const n = new Contrato(data);
        return n.save();
    },

    update(id, data) {
        return Contrato.findOneAndUpdate({_id: id}, data, {new: true}).exec();
    },

    remove(id) {
        return Contrato.findOneAndDelete({_id: id}).exec();
    },
};
