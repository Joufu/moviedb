import React from 'react';

export default {
    MovieOverview: function (movieDetails) {
        return (
            <div className="wrapper">
                <div>Title: {movieDetails.title}</div>
                <div>Release date: {movieDetails.release_date}</div>
                <div>Overview: {movieDetails.overview}</div>
            </div>
        )
    }
}