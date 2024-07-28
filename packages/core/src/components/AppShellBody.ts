import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class AppShellBody extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('div', 'body', undefined, undefined, props);
  }
}
