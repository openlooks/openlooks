import { Link } from '../components/Link';
import { SimpleComponent } from '../components/SimpleComponent';
import { Text } from '../components/Text';

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
