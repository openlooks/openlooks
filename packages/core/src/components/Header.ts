import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class Header extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('header', 'header', undefined, undefined, props);
  }
}
