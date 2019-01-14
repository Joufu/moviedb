module.exports = function (app, db) {
    app.get('/getValue/:searchValue', function (req, response) {
        const query = {value: req.params.searchValue};
        db.collection("test").findOne({key: /.*chi.*/g}, null, function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        });
    });

    app.put('/deleteMovie', function (req, response) {
        const data = req.body;
        const query = {key: req.body.key, value: req.body.value};
        db.collection("test").deleteOne(query, {$set: {value: req.body.updateValue}}, null, function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        })
    });

    app.post('/createMovie', function (req, response) {
        const movie = req.body;
        db.collection("moviedb").insertOne(movie, null, function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        })
    });

    app.delete('/deleteValue', function (req, response) {
        const data = req.body;
        const query = {key: req.body.key, value: req.body.value};
        db.collection("test").deleteOne(query, null, function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        })
    })
};