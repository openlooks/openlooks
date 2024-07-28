import { Link, HtmlComponent, Text } from '@openlooks/core';

export class HomePage extends HtmlComponent {
  constructor() {
    super('div', 'home', undefined, undefined, {
      children: [
        new Text({ text: 'Home' }),
        new Link({ href: '/test', text: 'At home, go to Test' }),
      ],
    });
  }
}
