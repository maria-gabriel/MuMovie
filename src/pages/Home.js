import React, { Component } from "react";
import { Title } from "../components/Title";
import { SearchForm } from "../components/SearchForm";
import { MoviesList } from "../components/MoviesList";

export class Home extends Component {
    state = { usedSearch: false, results: [] };

    _handleResults = (results) => {
        this.setState({ results, usedSearch: true });
      };
    
      _renderResults = () => {
        return this.state.results.length === 0 ? (
          <>
            <div className="Results-wrapper">
              <p className="SearchMns tag is-danger is-light">
                No se encontraron resultados.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="Results-wrapper">
              <p className="SearchMns tag is-info is-light">
                Se encontraron {this.state.results.length} resultados.
              </p>
              <div className="columns">
                <MoviesList movies={this.state.results} />
              </div>
            </div>
          </>
        );
      };

      
    render() {
        return (<div>
            <Title>Mu Movie</Title>
            <div className="SearchForm-wraper">
            <SearchForm onResults={this._handleResults} />
            </div>
            {this.state.usedSearch ? (
            this._renderResults()
            ) : (
            <>
                <div className="Results-wrapper">
                <small className="SearchMns tag is-info is-success">
                    Usa el buscador para buscar una pelicula
                </small>
                </div>
            </>
            )}
        </div>
        )
    }
}