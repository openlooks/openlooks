import { ComponentProps } from './Component';
import { SimpleComponent } from './SimpleComponent';

export class ConfiguratorControls extends SimpleComponent {
  constructor(props?: ComponentProps) {
    super('div', 'configurator-controls', undefined, undefined, props);
  }
}
