import React from "react";
export default {
    movieForm: function () {
       return (
           <div className="container">
               <label htmlFor="movieTitle">Movie Title</label>
               <input
                   type="text"
                   value={this.state.movieTitle}
                   placeholder="Movie Title"
                   name="movieTitle"
                   onChange={this.handleChange}
                   noValidate/>

               <label htmlFor="releaseDate">Release Date</label>
               <input
                   type="text"
                   value={this.state.realeaseDate}
                   placeholder="Release Date"
                   name="Release Date"
                   onChange={this.handleChange}
                   noValidate/>

           </div>
       )
    }
}
