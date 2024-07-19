import { Link } from '../components/Link';
import { SimpleComponent } from '../components/SimpleComponent';
import { Text } from '../components/Text';

export class TestPage extends SimpleComponent {
  constructor() {
    super('div', 'test', {
      children: [new Text({ text: 'Test' }), new Link({ href: '/', text: 'At test, go to Home' })],
    });
  }
}
