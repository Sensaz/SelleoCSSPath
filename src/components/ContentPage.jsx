import React from 'react';
import { Header, Description, Card } from './mainContent';
import '../style/contentpage.sass';

export const ContentPage = () => {
  return (
    <main className="main">
      <Header />
      <article className="main__article">
        <section className="main__section">
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
        </section>
        <section className="main__section">
          <Description />
        </section>
      </article>
      <article className="main__article">
        <Description />
      </article>
    </main>
  );
};
