import { ReactSVG } from 'react-svg';
import twitter from '../../../image/twitter.svg';
import facebook from '../../../image/facebook.svg';
import instagram from '../../../image/instagram.svg';
import '../../../style/description/descriptionAside.sass';

export const DescriptionAside = ({ aside }) => {
  const { images, content, marked = '', smallFont = true } = aside;

  const checkFontSize = smallFont ? 'aside__content' : 'aside__content aside__content--big';

  const svgIcons = {
    twitter,
    facebook,
    instagram
  };

  const image = images?.map(({ img, alt }) => (
    <ReactSVG key={alt} src={svgIcons[img]} alt={alt} className="aside__image" />
  ));
  return (
    <aside className="description-section__aside aside">
      {images && image}
      <p className={checkFontSize}>
        {content}
        <mark className="aside__content--marked">{marked}</mark>
      </p>
    </aside>
  );
};
