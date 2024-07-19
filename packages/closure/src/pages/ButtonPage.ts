import { Link } from '../components/Link';
import { SimpleComponent } from '../components/SimpleComponent';
import { Text } from '../components/Text';

export class ButtonPage extends SimpleComponent {
  constructor() {
    super('div', '', {
      children: [new Text({ text: 'Button' }), new Link({ href: '/', text: 'Back to home' })],
    });
  }
}
