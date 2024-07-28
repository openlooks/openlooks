import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class Center extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('div', 'center', undefined, undefined, props);
  }
}
