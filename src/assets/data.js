export const navLinks = [
  { id: 1, content: 'Products' },
  { id: 2, content: 'Offers' },
  { id: 3, content: 'Services' }
];

export const mainContent = [
  {
    id: 0,
    descriptionSectionProperty: {
      title: "There's beauty in simplicity",
      btnText: 'Buy now',
      aside: {
        images: [
          {
            img: 'twitter',
            alt: 'twitterIcon'
          },
          {
            img: 'facebook',
            alt: 'facebookIcon'
          },
          {
            img: 'instagram',
            alt: 'instagram'
          }
        ],
        content: 'Iconic design. ',
        marked: 'Recognised'
      },
      img: 'camera',
      alt: 'camera',
      theme: 'fancy',
      btnUnderDescription: true,
      content: `Characteristic German design, quality and engineering prowess bolster Braun's standing
      against cheaply produced competing producs`
    },
    displayImageCarouselControls: true
  },
  {
    id: 1,
    background: 'light',
    sections: [
      {
        id: 'section1',
        cards: [
          {
            id: 'card1section1',
            title: 'Watches',
            content:
              'The Braun collection has been created as a true representation of quality, clarity,longevity and timelessness.'
          },
          {
            id: 'card2section1',
            title: 'Health',
            content:
              'Get the latest advice for a happy, healthy life for you and your family, from Braun Healthcare. Award winning fever thermometers.'
          },
          {
            id: 'card3section1',
            title: 'Kitchen',
            content:
              'Turn Over a New Leaf Conquer the expected this New Conquer the expected this New Year with creatie ways to get healthy and eat your veggies'
          }
        ]
      },
      {
        id: 'section2',
        descriptionSectionProperty: {
          title: 'Anything less would be too much',
          btnText: 'Buy now',
          aside: {
            content: 'BN0378'
          },
          img: 'watch',
          alt: 'watch',
          imgFullSize: true,
          content: `Characteristic German design, quality and engineering prowess bolster Braun's standin  against cheaply produced competing producs`
        }
      }
    ]
  },
  {
    id: 2,
    background: 'bike',
    descriptionSectionProperty: {
      title: 'Take control of your health',
      btnText: 'explore options',
      aside: {
        content: 'BN0378'
      },
      theme: 'light',
      content: `Braun clocks have been designed to enhance their individual uses through a combination of features and functions. The Braun watch collection has been created as a true representation of quality.`
    }
  }
];
