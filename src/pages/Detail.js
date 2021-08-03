import React, { Component } from 'react';
import PropTypes from 'prop-types';

const config = require('../config.json');
const API_KEY = config['x-rapidapi-key'];
const API_HOST = config['x-rapidapi-host'];

export class Detail extends Component {

    static propTypes = {
        match: PropTypes.shape(
            {
                params: PropTypes.object,
                isExact: PropTypes.bool,
                path: PropTypes.string,
                url: PropTypes.string
            }
        )
    }

    state = {
        movie: {},
    }

    _fetchMOvie = ({ id }) => {
        const getDetails = 'https://imdb8.p.rapidapi.com/title/get-details?tconst='
        fetch(`${getDetails}${id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": API_KEY,
                "x-rapidapi-host": API_HOST
            }
        })
            .then(res => res.json())
            .then(movie => {
                this.setState({ movie })
            })

    }

    _fetchActors = ({ id }) => {

        const getDetails = 'https://imdb8.p.rapidapi.com/title/get-full-credits?tconst='
        fetch(`${getDetails}${id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": API_KEY,
                "x-rapidapi-host": API_HOST
            }
        })
            .then(res => res.json())
            .then(crew => {
                this.setState({ cast: crew.cast })
            })
    }

    _goBack = () => {
        window.history.back()
    }


    componentDidMount() {
        console.log(this.props)
        const { id } = this.props.match.params;
        this._fetchMOvie({ id })
        this._fetchActors({ id })
    }

    render() {
        const cast = this.state.cast;
        return (
            <div>
                <p>Details</p>
                <div>
                    <ul>
                        {
                            cast
                                ? cast.map(actor => {
                                    let id = actor.id
                                    return (
                                        <li key={id} className="MoviesList-item">
                                            {actor.name}
                                            <img
                                                src={actor.image ? actor.image.url : null}
                                                alt={actor.name}
                                            ></img>
                                        </li>
                                    )
                                })
                                : <li id={0}> Loading cast </li>
                        }
                    </ul>
                </div>
                <button onClick={this._goBack}>Back</button>

            </div>

        )
    }
}