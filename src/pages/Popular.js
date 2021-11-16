import React, { Component } from 'react';
import Card from '../components/Card';

class Popular extends Component {

    constructor () {
        super()

        //initial state
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        const apiKey = '9958597c07ec90e02675c97691bf4506';
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
            .then(response => response.json())
            .then(result => this.setState({ movies: result.results }))
        console.log('componentDidMount', this.state.movies);
        //result.results = we only want some information within results key
    }

    render() {

        // data state defined to reuse them shortly
        const { movies } = this.state;

        return (
            <>
                <div className="container-fluid mx-5 my-5 text-center">
                    <div className="row">
                    {movies.map(movie => (
                         <Card
                         key={movie.id}
                         poster={movie.poster_path}
                         title={movie.title}
                         release={movie.release_date}
                         description={movie.description}
                     />
                    ))}
                    </div>
                </div>
            </>
        )
    }
}

export default Popular;