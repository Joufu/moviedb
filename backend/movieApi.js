module.exports = function (app, db) {
    app.post('/addMovie', function (req, response) {
        const data = req.body;
        db.collection("movies").insertOne(data, null, function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        })
    });

    // app.get(`/getAllRecipes`, function (req, response) {
    //     db.collection('recipes').find({}).toArray(function (err, docs) {
    //         response.status(200);
    //         response.send(JSON.stringify(docs))
    //     })
    // });

    app.get('/getMoviesByPage/:itemsPerPage/:pageNumber', function (req, res) {
        let itemsPerPage = parseInt(req.params.itemsPerPage);
        let pageNumber = parseInt(req.params.pageNumber);
        db.collection("movies").find({}).skip(itemsPerPage * (pageNumber - 1)).limit(itemsPerPage).toArray(function (err, docs) {
            console.log(docs);
            res.status(200);
            res.send(JSON.stringify(docs))
        });
    });

    app.get('/search/:itemsPerPage/:pageNumber/:searchInput', function (req, res) {
        let itemsPerPage = parseInt(req.params.itemsPerPage);///.*m.*/
        let pageNumber = parseInt(req.params.pageNumber);
        let searchInput = req.params.searchInput;
        let query = [
            {strMeal: new RegExp(searchInput, 'gi')},
            {strInstructions: new RegExp(searchInput, 'gi')}
        ];

        db.collection("recipes").find({$or: query}).skip(itemsPerPage * (pageNumber - 1)).limit(itemsPerPage).toArray(function (err, docs) {
            console.log("Found the following records");
            console.log(docs);
            res.status(200);
            res.send(JSON.stringify(docs))
        });
    })
};