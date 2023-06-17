import React from 'react';
import '../../style/card.sass';

export const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__content">{children}</p>
      <p className="card__details">
        <span className="card__details--dot"></span>
        <span className="card__details--dot"></span>
        <span className="card__details--dot"></span>
        <span className="card__details--hovered">LEARN MORE</span>
      </p>
    </div>
  );
};
