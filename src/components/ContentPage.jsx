import React from 'react';
import { Card, ImageCarouselControls } from './mainContent';
import '../style/contentpage.sass';
import { DescriptionSection } from './mainContent/DescriptionSection';
import camera from '../image/camera.svg';
import watch from '../image/watch--medium.jpg';
import { CardsSection } from './mainContent/CardsSection';
import { mainContent } from '../assets';

const backgrounds = {
  dark: 'main__article',
  light: 'main__article main__article--background-light',
  bike: 'main__article main__article--background-bike'
};

const photos = {
  watch,
  camera
};

const content = mainContent.map((article) => {
  const {
    id,
    background = 'dark',
    sections = false,
    descriptionSectionProperty = false,
    displayImageCarouselControls = false
  } = article;
  const articleClassName = backgrounds[background];

  const renderDescriptionSection = (section) => {
    const { title, btnText, aside, img, alt, imgFullSize, theme, btnUnderDescription, content } =
      section;

    return (
      <DescriptionSection
        title={title}
        btnText={btnText}
        aside={aside}
        img={photos[img]}
        alt={alt}
        imgFullSize={imgFullSize}
        theme={theme}
        btnUnderDescription={btnUnderDescription}>
        {content}
      </DescriptionSection>
    );
  };

  return (
    <article key={id} className={articleClassName}>
      {descriptionSectionProperty && (
        <>
          {renderDescriptionSection(descriptionSectionProperty)}
          {displayImageCarouselControls && <ImageCarouselControls />}
        </>
      )}
      {sections &&
        sections.map((detailSection) => {
          const { cards = [], descriptionSectionProperty = {} } = detailSection;
          return (
            <section className="main__section" key={detailSection.id}>
              {cards.length > 0 && (
                <CardsSection>
                  {cards.map((card) => (
                    <Card key={card.id} title={card.title}>
                      {card.content}
                    </Card>
                  ))}
                </CardsSection>
              )}
              {Object.keys(descriptionSectionProperty).length > 0 && (
                <>{renderDescriptionSection(descriptionSectionProperty)}</>
              )}
            </section>
          );
        })}
    </article>
  );
});

export const ContentPage = () => {
  return <main className="main">{content}</main>;
};
