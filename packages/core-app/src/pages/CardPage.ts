import {
  Badge,
  Button,
  Card,
  CardSection,
  Center,
  Container,
  Group,
  HtmlComponent,
  Image,
  Paper,
  Text,
  Title,
} from '@openlooks/core';

export class CardPage extends HtmlComponent {
  constructor() {
    super('div', '', undefined, undefined, {
      children: [
        new Container({
          className: 'doc-body size-sm p-sm py-xl',
          children: [
            new Title({ order: 1, text: 'Card' }),
            new Text({
              text: 'Card component is a wrapper around Paper component with context styles for Card.Section component:',
            }),
            new Paper({
              className: 'p-xl mt-xl withBorder',
              style: { background: 'var(--oc-gray-1)' },
              children: [
                new Center({
                  children: [
                    new HtmlComponent('div', '', undefined, undefined, {
                      style: { maxWidth: '21.25rem' },
                      children: [
                        new Card({
                          className: 'shadow-sm p-lg radius-md withBorder',
                          children: [
                            new CardSection({
                              children: [
                                new Image({
                                  src: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
                                  style: { height: '160px' },
                                  alt: 'Norway',
                                }),
                              ],
                            }),
                            new Group({
                              className: 'position-apart mt-md mb-xs',
                              children: [
                                new Text({
                                  className: 'weight-500',
                                  text: 'Norway Fjord Adventures',
                                }),
                                new Badge({
                                  className: 'color-pink variant-light',
                                  text: 'On Sale',
                                }),
                              ],
                            }),
                            new Text({
                              className: 'size-sm color-gray',
                              text: 'With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway',
                            }),
                            new Button({
                              className: 'variant-light color-blue mt-md radius-md fullWidth',
                              text: 'Book classic tour now',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
}
