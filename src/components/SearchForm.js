import React, { Component } from 'react'
const API_KEY = 'f38d13b'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) =>{
        e.preventDefault()
        const inputMovie = this.state.inputMovie
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then(res => res.json())
        .then(results => {
            const {Search = [], totalResults = "0"} = results
            this.props.onResults(Search)
        })

    }


    render() {
        return (
            <form onSubmit={this._handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input 
                    onChange={this._handleChange}
                    className="input" 
                    type="text" 
                    required
                    />
                </div>
                <div className="control">
                    <button className="button is-dark">
                        Buscar
                    </button>
                </div>
            </div>
            </form>
        )
    }
}