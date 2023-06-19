import { Description } from './DescriptionElements/Description';
// import '../../../style/description/descriptionSection.sass';
import '../../style/description/descriptionSection.sass';
import { DescriptionAside } from './DescriptionElements/DescriptionAside';

export const DescriptionSection = ({
  title,
  children,
  btnText,
  aside = '',
  theme = 'dark',
  img = '',
  alt = 'photo',
  imgFullSize = false,
  btnUnderDescription = false
}) => {
  return (
    <section className="description-section">
      {aside && <DescriptionAside aside={aside} />}

      <section className="description-section__depiction">
        <Description
          title={title}
          btnText={btnText}
          theme={theme}
          btnUnderDescription={btnUnderDescription}>
          {children}
        </Description>
      </section>
      {img && (
        <section
          className={`description-section__photo ${
            theme === 'fancy' ? 'description-section__photo--fancy' : ''
          }`}>
          <img
            className={`description-section__photo-img ${
              imgFullSize ? 'description-section__photo-img--full-size' : ''
            } ${theme === 'fancy' ? 'description-section__photo-img--fancy' : ''}`}
            src={img}
            alt={alt}
          />
        </section>
      )}
    </section>
  );
};
