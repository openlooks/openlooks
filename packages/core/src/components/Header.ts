import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class Header extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('div', 'header', undefined, undefined, props);
  }
}
