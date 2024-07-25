import { Link, SimpleComponent, Text } from '@openlooks/core';

export class HomePage extends SimpleComponent {
  constructor() {
    super('div', 'home', undefined, undefined, {
      children: [
        new Text({ text: 'Home' }),
        new Link({ href: '/test', text: 'At home, go to Test' }),
      ],
    });
  }
}
