import React from 'react';
import { ReactSVG } from 'react-svg';
import facebook from '../../image/facebook.svg';
import instagram from '../../image/instagram.svg';
import twitter from '../../image/twitter.svg';
import camera from '../../image/camera.svg';
import '../../style/header.sass';

export const Header = () => {
  return (
    <header className="main__header">
      <div className="header">
        <aside className="header__aside">
          <div>
            <ReactSVG className="header__social-media-icon" src={facebook} />
            <ReactSVG className="header__social-media-icon" src={instagram} />
            <ReactSVG className="header__social-media-icon" src={twitter} />
          </div>
          <span className="header__info">
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
        <section className="header__section">
          <img className="header__camera" src={camera} alt="camera" />
        </section>
      </div>
      <footer className="header__slider">
        <button className="header__slider-button">
          <span className="header__arow header__arow--left"></span>
        </button>
        <div className="header__image-indicators">
          <span className="header__image-indicator"></span>
          <span className="header__image-indicator"></span>
          <span className="header__image-indicator"></span>
        </div>
        <button className="header__slider-button">
          <span className="header__arow"></span>
        </button>
      </footer>
    </header>
  );
};
