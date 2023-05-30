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
        <div className="Results-wrapper ghost-container">
          <p className="SearchMns tag is-danger">
            No se encontraron resultados.
          </p>
        </div>
      </>
    ) : (
      <>
        <div className="Results-wrapper ghost-container">
          <span className="tag is-primary">Se encontraron {this.state.results.length} películas que se relacionan con tu búsqueda </span>
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
            <div className="Results-wrapper my-2">
              <div className="notification is-info is-light">
                Ingresa tu película y presiona{" "}
                <strong>Buscar</strong> para hacer la busqueda.
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
