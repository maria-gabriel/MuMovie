import React, { Component } from "react";
import PropTypes from "prop-types";
import { Back } from "../components/Back";

const API_KEY = "f38d13b";

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  };

  state = { movie: {} };
  _fecthMovie({ id }) {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((movie) => {
        this.setState({ movie });
      });
  }

  _goBack() {
    window.history.back();
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this._fecthMovie({ id: movieId });
  }
  render() {
    const { Title, Poster, Actors, Country, Plot, Year, Writer, Runtime, Language } =
      this.state.movie;
    console.log(this.state.movie);
    return (
      <div>
        <div className="ghost-container py-4">
          <Back />
        </div>
        <div className="box-container">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image">
                  <img src={Poster === 'N/A' ? 'https://dummyimage.com/400x550/000/e8e8e8.jpg&text=undefined' : Poster} alt={Title} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h1>{Title}</h1>{" "}
                  <h6>
                    {Country}, {Year}
                  </h6>
                  <p>
                    <strong>Descripción: </strong>
                    {Plot}
                  </p>
                  <p>
                    <strong>Idioma: </strong>
                    <span className="tag is-primary is-light">{Language}</span>
                  </p>
                  <p>
                    <strong>Duración: </strong>
                    <span className="tag is-warning is-light">{Runtime}</span>
                  </p>
                  <p>
                    <strong>Actores: </strong>
                    {Actors}
                  </p>
                  <br/>
                  <i className="has-text-info">By: {Writer}</i>
                </div>
              </div>
            </article>
          </div>
          </div>
      </div>
    );
  }
}
