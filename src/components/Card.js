import React, { Component } from 'react';
import '../components/card.css';

class Card extends Component {
    render() {

        const posterpath = "https://image.tmdb.org/t/p/w300";
        const { poster, title, release, description } = this.props;

        return (
            <div className="col-6 col-ms-6" style={{ width: "450px" }}>
                <div className="movieBox">
                    <img src={`${posterpath}${poster}`} alt="Poster Movie" />
                    <h1>{title}</h1>
                    <h1>{release}</h1>
                    <h1>{description}</h1>
                </div>
            </div>
        );
    }
}

export default Card;