import { ReactSVG } from 'react-svg';
import '../../style/descriptionAside.sass';

export const DescriptionAside = ({ aside }) => {
  const { images, content, marked = '', smallFont = true } = aside;

  const checkFontSize = smallFont ? 'aside__content' : 'aside__content aside__content--big';

  const image = images?.map(({ img, alt }) => (
    <ReactSVG key={alt} src={img} alt={alt} className="aside__image" />
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
