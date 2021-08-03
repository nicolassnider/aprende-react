import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

export class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render() {
        const { movies } = this.props
        return (
            <div className="MoviesList">
                {
                    movies.map(movie=>{
                        let id = movie.id
                        id = id.replaceAll('/title/', '').substring(0, movie.id.length - 1)
                        return(
                            <div key={movie.id} className ="MoviesList-item">
                                <Movie
                                    id={id}
                                    title={movie.title}
                                    year={movie.year}
                                    poster = {movie.image?movie.image.url:null}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default MoviesList