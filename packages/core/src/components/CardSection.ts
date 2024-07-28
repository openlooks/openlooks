import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class CardSection extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('div', 'card-section', undefined, undefined, props);
  }
}
