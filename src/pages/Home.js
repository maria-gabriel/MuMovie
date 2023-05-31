import React, { Component } from "react";
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
        <div className="notification is-danger is-light">
            No se encontraron resultados.
        </div>
      </>
    ) : (
      <>
          <div className="notification is-success is-light">
            Se encontraron {this.state.results.length} películas que se relacionan con tu búsqueda
          </div>
          <div className="MoviesList ghost-container">
            <MoviesList movies={this.state.results} />
          </div>
        
      </>
    );
  };

  render() {
    return (
      <div>
        <div className="SearchForm-wraper py-4 ghost-container">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <>
              <div className="notification is-info is-light">
                Ingresa el nombre y presiona <strong>Buscar</strong> para iniciar tu búsqueda :)
              </div>
          </>
        )}
      </div>
    );
  }
}
