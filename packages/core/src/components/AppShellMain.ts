import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class AppShellMain extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('main', 'main scrollarea', undefined, undefined, props);
  }
}
