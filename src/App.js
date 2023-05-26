import React, { Component } from 'react'

import './App.css';
import 'bulma/css/bulma.css';
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { MoviesList } from './components/MoviesList';

class App extends Component {
  state = { results : [] }

  _handleResults = (results) => {
    this.setState({ results })
  }

  render() {
    return (
      <div className="App">
          <Title>Mu Movie</Title>
          <div className="SearchForm-wraper">
          <SearchForm onResults={this._handleResults}/>
          </div>
          { this.state.results.length == 0
            ? 
            <>
            <div className="Results-wrapper">
            <p className="SearchMns tag is-danger is-light">No se encontraron resultados.</p>
            </div>
            </>
            : 
            <>
            <div className="Results-wrapper">
            <p className="SearchMns tag is-info is-light">Se encontraron {this.state.results.length} resultados.</p>
            <div class="columns">
            <MoviesList movies={this.state.results} />
            </div>
            </div>
            </>
          }
      </div>
    )
  }
}

export default App;
