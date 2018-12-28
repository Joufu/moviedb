export default {
    addMovie: function (body) {
        return fetch(`http://localhost:2001/addMovie`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
          .then((data)=>{
            return data
        })
    }
}