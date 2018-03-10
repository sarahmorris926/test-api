
var ObjectID = require('mongodb').ObjectID;


module.exports = function(app, db) {

        // CREATE
        const collection =
        app.post('/notes', (req, res) => {
            const note = { text: req.body.body, title: req.body.title };
            db.collection('notes').insert(note, (err, result) => {
                if (err) {
                    res.send({'error': 'An error has occurred while creating'});
                } else {
                    res.send(result.ops[0]);
                }
            })
        });

    // READ
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred while getting'});
            } else {
                res.send(item);
            }
        })
    });

    // UPDATE
    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id' : new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').update(details, note, (err, result) => {
            if (err) {
                res.send({'error':'An error has occurred while updating'});
            } else {
                res.send(note);
            }
        });
    });


    // DELETE
    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').remove(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(`Note ${id} deleted!`);
            }
        });
    });

};