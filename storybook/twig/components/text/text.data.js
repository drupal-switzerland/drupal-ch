export const text = {
  type: 'ParagraphText',
  class: '',
  text: {
    processed:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
  },
};

export const textWithImage = {
  type: 'ParagraphText',
  class: '',
  title: 'Sample Text PT',
  text: {
    processed: '<p>Accumsan est bibendum class et nascetur iaculis ac cras erat ad sociosqu himenaeos, ipsum platea vehicula ullamcorper habitasse dictum curabitur velit lobortis tempus. Ut consectetur ridiculus vestibulum dignissim dolor, congue faucibus feugiat sodales, netus non dictumst cubilia. Quis feugiat parturient class consectetur velit tellus faucibus, lectus consequat sapien massa cubilia ligula porta, scelerisque ipsum vehicula imperdiet auctor netus.</p>\n',
  },
  embedMedia: {
    entity: {
      media: {
        entity: {
          type: 'MediaImage',
          mediaImage: {
            url: 'https://via.placeholder.com/640x360?text=16:9',
            alt: 'an image alt text',
            rectangularLarge: {
              url: 'https://via.placeholder.com/1350x2400?text=9:16',
              height: 1350,
              width: 2400,
            },
            squareLarge: {
              url: 'https://via.placeholder.com/1200x1200?text=1:1',
              height: 1200,
              width: 1200,
            },
            squareMedium: {
              url: 'https://via.placeholder.com/600x600?text=1:1',
              height: 600,
              width: 600,
            },
            squareSmall: {
              url: 'https://via.placeholder.com/300x300?text=1:1',
              height: 300,
              width: 300,
            },
          },
        },
      },
      position: 'left',
    },
  },
  entityLink: {
    entity: {
      link: {
        title: 'Some other page link text',
        uri: 'entity:node/1',
        url: {
          path: '#test-anchor',
          routed: true,
        },
      },
      class: 'slack',
    },
  },
};
