import { Hamburger } from './global/Hamburger';
import '../style/navigation.sass';
import { useState } from 'react';
import { navLinks } from '../assets';

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
          <input
            required
            type="text"
            placeholder="How can we help?"
            className="navigation__search"
          />
        </nav>
        <Hamburger isClicked={menuIsExtended} click={setMenuIsExtended} />
      </div>
    </header>
  );
};
