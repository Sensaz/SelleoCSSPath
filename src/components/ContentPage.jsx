import React from 'react';
import { Card, ImageCarouselControls } from './mainContent';
import '../style/contentpage.sass';
import DescriptionSection from './mainContent/DescriptionSection';
import twitter from '../image/twitter.svg';
import facebook from '../image/facebook.svg';
import instagram from '../image/instagram.svg';
import camera from '../image/camera.svg';
import watch from '../image/watch--medium.jpg';
import { CardsSection } from './mainContent/CardsSection';

export const ContentPage = () => {
  return (
    <main className="main">
      <article className="main__article">
        <DescriptionSection
          title="There's beauty in simplicity"
          btnText="Buy now"
          aside={{
            images: [
              {
                img: twitter,
                alt: 'twitterIcon'
              },
              {
                img: facebook,
                alt: 'facebookIcon'
              },
              {
                img: instagram,
                alt: 'instagram'
              }
            ],
            content: 'Iconic design. ',
            marked: 'Recognised'
          }}
          img={camera}
          alt="camera"
          theme="fancy"
          btnUnderDescription={true}>
          Characteristic German design, quality and engineering prowess bolster Braun's standing
          against cheaply produced competing producs
        </DescriptionSection>
        <ImageCarouselControls />
      </article>

      <article className="main__article main__article--light">
        <section className="main__section">
          <CardsSection>
            <Card title="Watches">
              The Braun collection has been created as a true representation of quality, clarity,
              longevity and timelessness.
            </Card>
            <Card title="Health">
              Get the latest advice for a happy, healthy life for you and your family, from Braun
              Healthcare. Award winning fever thermometers.
            </Card>
            <Card title="Kitchen">
              Turn Over a New Leaf Conquer the expected this New Conquer the expected this New Year
              with creatie ways to get healthy and eat your veggies
            </Card>
          </CardsSection>
        </section>
        <DescriptionSection
          title="Anything less would be too much"
          btnText="Buy now"
          aside={{ content: 'BN0378', smallFont: false }}
          img={watch}
          alt="watch"
          imgFullSize={true}>
          Braun clocks have been designed to enhance their individual uses through a combination of
          features and functions. The Braun watch collection has been created as a true
          representation of quality.
        </DescriptionSection>
      </article>
      <article className="main__article main__article--background-bike">
        <DescriptionSection
          title="Take control of your health"
          btnText="explore options"
          theme="light">
          Braun clocks have been designed to enhance their individual uses through a combination of
          features and functions. The Braun watch collection has been created as a true
          representation of quality.
        </DescriptionSection>
      </article>
    </main>
  );
};
