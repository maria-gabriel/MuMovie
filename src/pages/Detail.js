import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Back } from "../components/Back"

const API_KEY = 'f38d13b'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {}}
    _fecthMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
            this.setState({ movie });
        })
    }

    _goBack(){
        window.history.back();
    }

    componentDidMount() {
        console.log(this.props)
        const { movieId } = this.props.match.params;
        this._fecthMovie({ id: movieId})
    }
    render(){
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div>
                <Back/>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}