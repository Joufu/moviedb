module.exports = function (app, db) {
    app.post('/addMovie', function (req, response) {
        const data = req.body;
        db.collection("movies")
            .insertOne(data, null, function (err, docs) {
                response.status(200);
                response.send(JSON.stringify(docs))
            })
    });

    app.get('/getMoviesByPage/:itemsPerPage/:pageNumber', function (req, res) {
        let itemsPerPage = parseInt(req.params.itemsPerPage);
        let pageNumber = parseInt(req.params.pageNumber);
        db.collection("movies")
            .find({}).skip(itemsPerPage * (pageNumber - 1))
            .limit(itemsPerPage)
            .toArray(function (err, docs) {
                console.log(docs);
                res.status(200);
                res.send(JSON.stringify(docs))
            });
    });

    app.post('/search', function (req, res) {
        const data = req.body;
        let itemsPerPage = data.itemsPerPage;
        let pageNumber = data.pageNumber;
        let searchInput = data.searchInput.trim();
        if (!searchInput) {
            res.status(200);
            res.send([]);
            return
        }
        let query = {title: new RegExp(searchInput, 'gi')};

        db.collection("movies")
            .find(query)
            .skip(itemsPerPage * (pageNumber - 1))
            .limit(itemsPerPage)
            .toArray(function (err, docs) {
                console.log(docs);
                res.status(200);
                res.send(JSON.stringify(docs))
            });
    })
};