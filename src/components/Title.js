import React from "react";

export const Title = ({ children }) => (
  <section className="hero is-primary">
    <div className="hero-body">
      <p className="title">{ children }</p>
      <p className="subtitle">Encuentra la película que buscas</p>
    </div>
  </section>
);
