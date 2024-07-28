import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class Configurator extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('div', 'configurator', undefined, undefined, props);
  }
}
