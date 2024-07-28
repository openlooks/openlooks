import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class ConfiguratorControls extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('div', 'configurator-controls', undefined, undefined, props);
  }
}
