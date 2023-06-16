import React from 'react';
import { ReactSVG } from 'react-svg';
import facebook from '../../image/facebook.svg';
import instagram from '../../image/instagram.svg';
import twitter from '../../image/twitter.svg';

export const Header = () => {
  return (
    <header className="main__header">
      <aside className="header__aside">
        <ReactSVG className="aside__svg" src={facebook} />
        <ReactSVG className="aside__svg" src={instagram} />
        <ReactSVG className="aside__svg" src={twitter} />
        Iconic design . recognised
      </aside>
      <section className="header__section">
        <article>
          <h2 className="section__title">There's beauty in simplicity</h2>
          <p className="section__content">
            Characteristic German design, quality and engineering prowess bolster Braun's standing
            against cheaply produced competing producs
          </p>
          <button className="section__button">Buy now</button>
        </article>
      </section>
      <section className="header__section">obrazek</section>
      <footer className="header__footer">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
      </footer>
    </header>
  );
};
