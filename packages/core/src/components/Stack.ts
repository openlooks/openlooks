import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class Stack extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('div', 'stack', undefined, undefined, props);
  }
}
