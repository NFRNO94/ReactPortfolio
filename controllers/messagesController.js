const db = require('../models');

module.exports = {
    findAll(req, res) {
        db.Message
        .find(req.query)
        .then(dbModel => req.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById(req, res) {
        db.Message
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).eson(err));
    },
    // create(req, res) {
    //     db.Message

    // }

}