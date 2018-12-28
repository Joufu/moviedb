export default {
    getMoviesFromApi: function (page) {
       const apiKey = "ce66cbe4ff36aba60a8d9bd1bc7b21d9";
       return fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + apiKey + '&page=' + page)
            .then((resp) => resp.json())
            .then(function (data) {
                return data.results;
            })
    }
}
