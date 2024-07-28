import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class Card extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('div', 'card paper', undefined, undefined, props);
  }
}
