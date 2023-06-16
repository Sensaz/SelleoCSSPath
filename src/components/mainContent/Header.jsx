import React from 'react';
import { ReactSVG } from 'react-svg';
import facebook from '../../image/facebook.svg';
import instagram from '../../image/instagram.svg';
import twitter from '../../image/twitter.svg';
import '../../style/header.sass';

export const Header = () => {
  return (
    <header className="main__header header">
      <aside className="header__aside">
        <ReactSVG className="header__svg" src={facebook} />
        <ReactSVG className="header__svg" src={instagram} />
        <ReactSVG className="header__svg" src={twitter} />
        <span>
          Iconic design. <mark className="header__mark"> recognised</mark>
        </span>
      </aside>
      <section className="header__section">
        <h2 className="header__title">There's beauty in simplicity</h2>
        <article className="header__article">
          <p className="header__content">
            Characteristic German design, quality and engineering prowess bolster Braun's standing
            against cheaply produced competing producs
          </p>
          <button className="header__button">Buy now</button>
        </article>
      </section>
      <section className="header__section">obrazek</section>
      <footer className="header__slider">
        <button className="header__slider-button header__slider-button--previous"></button>
        <div className="header__image-indicators">
          <span className="header__image-indicator"></span>
          <span className="header__image-indicator"></span>
          <span className="header__image-indicator"></span>
        </div>
        <button className="header__slider-button header__slider-button--next"></button>
      </footer>
    </header>
  );
};
