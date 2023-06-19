import { Hamburger } from './global/Hamburger';
import '../style/bodyNavigation/navigation.sass';
import { useState } from 'react';
import { navLinks } from '../assets';
import { ReactSVG } from 'react-svg';
import basket from '../image/basket.svg';

export const Navigation = () => {
  const [menuIsExtended, setMenuIsExtended] = useState(false);

  const navigationList = navLinks.map(({ id, content }) => (
    <li key={id} className="navigation__item">
      <a href="#" className="navigation__link">
        {content}
      </a>
    </li>
  ));

  const navigationMenuClass = `navigation__menu ${menuIsExtended ? 'navigation__menu--show' : ''}`;

  return (
    <header className="navigation">
      <strong className="navigation__logo">brAun</strong>
      <div>
        <nav className={navigationMenuClass}>
          <ul className="navigation__list">{navigationList}</ul>
          <div className="navigation__wrapper">
            <input
              required
              type="text"
              placeholder="How can we help?"
              className="navigation__search"
            />
            <ReactSVG className="navigation__basket" src={basket} alt="basketIcon" />
          </div>
        </nav>
        <Hamburger isClicked={menuIsExtended} click={setMenuIsExtended} />
      </div>
    </header>
  );
};
