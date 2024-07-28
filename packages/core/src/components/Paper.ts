import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class Paper extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('div', 'paper', undefined, undefined, props);
  }
}
