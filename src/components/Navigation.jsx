import { Hamburger } from './global/Hamburger';
import '../style/navigation.sass';
import { useState } from 'react';

const navLinks = [
  { id: 1, content: 'Products' },
  { id: 2, content: 'Offers' },
  { id: 3, content: 'Services' }
];

export const Navigation = () => {
  const [menuIsExtended, setMenuIsExtended] = useState(false);

  const navigationList = navLinks.map(({ id, content }) => (
    <li key={id} className="navigation__item">
      <a href="#" className="navigation__link">
        {content}
      </a>
    </li>
  ));

  return (
    <header className="navigation">
      <strong className="navigation__logo">braun</strong>
      <div>
        <nav className={`navigation__menu ${menuIsExtended ? 'navigation__menu--show' : ''}`}>
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
