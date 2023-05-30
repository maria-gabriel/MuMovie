import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

export class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
  };

  render() {
    const { id, poster, title, year } = this.props;
    
    return (
        <Link to={`/detail/${id}`} className="card box is-light">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={poster != 'N/A' ? poster : 'https://dummyimage.com/400x550/000/e8e8e8.jpg&text=undefined'} alt={title} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{year}</p>
              </div>
            </div>
          </div>
        </Link>
    );
  }
}
