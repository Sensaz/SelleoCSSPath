import { Hamburger } from './global/Hamburger';
import '../style/navigation.sass';

const navLinks = [
  { id: 1, content: 'Products' },
  { id: 2, content: 'Offers' },
  { id: 3, content: 'Services' }
];

export const Navigation = () => {
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
      <div className="navigatoin__elements-wrapper">
        <nav className="navigation__menu">
          <ul className="navigation__list">{navigationList}</ul>
          <input type="text" className="navigation__search" />
        </nav>
      </div>
      <Hamburger />
    </header>
  );
};
