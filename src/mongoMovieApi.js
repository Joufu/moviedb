export default {
    addMovie: function (body) {
        return fetch(`http://192.168.56.105:2001/addMovie`, {
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
    },
    deleteMovie: function (body) {
        return fetch(`http://192.168.56.105:2001/deleteMovie`, {
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