import React, { Component } from 'react';

import Card from '../components/Card';

class PopularBattle extends Component {


    constructor () {
        super()

        this.state = {
            movies: [],
            currentBattle: 0,
            favorites: []
        }

        // this.handleMovieCardClick = this.handleMovieCardClick(bind);
    }

    componentDidMount() {
        const apiKey = '9958597c07ec90e02675c97691bf4506';
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
            .then(response => response.json())
            .then(result => this.setState({ movies: result.results }))
        console.log('componentDidMount', this.state.movies);
        //result.results = we only want some information within results key
    }

    // We need to use an id parameter to retrieve each movie (each card index)
    // 
    handleMovieCardClick(id) {
        let { currentBattle, favorites } = this.state;
        if (currentBattle === this.state.movies.length - 2) {
            alert("Vous avez parcouru tous les films");
        } else {
            this.setState({
                currentBattle: currentBattle += 2,
                favorites: [...favorites, id]
            })

        }
        console.log(id);
    }

    render() {

        // data state defined to reuse them shortly
        const { movies, favorites } = this.state;
        const filteredMovies = movies.filter((movie, index) => { return index === this.state.currentBattle || index === this.state.currentBattle + 1 });

        localStorage.setItem("favorite", JSON.stringify(favorites)); // localStorage browser data store

        return (
            <>
                <div className="container-fluid mx-5 my-5 text-center">
                    <div className="row">
                        {filteredMovies.map(movie => (
                            <div className="col-6 col-ms-6" style={{ width: "450px" }} onClick={() => this.handleMovieCardClick(movie.id)}>
                                <div className="movieBox">
                                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="Poster Movie" />
                                    <h1>{movie.title}</h1>
                                    <h1>{movie.release}</h1>
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default PopularBattle;