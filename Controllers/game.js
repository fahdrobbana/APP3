import Game from '../../model/game.js';

export function addOnce(req, res) {
    Game.create(req.body)
        .then(newGame => {
            res.status(201).json(newGame); 
        })
        .catch(err => {
            res.status(500).json({ error: err.message }); 
        });
}

export function getAll(req, res) {
    Game.find({})
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
}

export function putAll(req, res) {
    Game.updateMany({}, { "onSale": true })
        .then(result => {
            res.status(200).json(result); 
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
}

export function patchOnce(req, res) {
    Game.findOneAndUpdate({ "name": req.params.name }, { "onSale": false }, { new: true }) 
        .then(doc => {
            if (!doc) {
                res.status(404).json({ message: "Game not found" });
            } else {
                res.status(200).json(doc);
            }
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
}

export function deleteOnce(req, res) {
    Game.deleteMany({ "onSale": false })
        .then(result => {
            res.status(200).json(result); 
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
}

export function deleteByName(req, res) {
    Game.findOneAndDelete({ "name": req.params.name })
        .then(doc => {
            if (!doc) {
                res.status(404).json({ message: "Game not found" });
            } else {
                res.status(200).json(doc);
            }
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
}
