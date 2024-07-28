import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class Container extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('div', 'container', undefined, undefined, props);
  }
}
