import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class AppShell extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('div', 'appshell', undefined, undefined, props);
  }
}
