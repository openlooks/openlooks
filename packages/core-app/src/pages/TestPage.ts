import { Link, HtmlComponent, Text } from '@openlooks/core';

export class TestPage extends HtmlComponent {
  constructor() {
    super('div', 'test', undefined, undefined, {
      children: [new Text({ text: 'Test' }), new Link({ href: '/', text: 'At test, go to Home' })],
    });
  }
}
