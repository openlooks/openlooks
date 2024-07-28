import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export class ConfiguratorStage extends HtmlComponent {
  constructor(props?: ComponentProps) {
    super('div', 'configurator-stage', undefined, undefined, props);
  }
}
