import { ComponentProps } from './Component';
import { SimpleComponent } from './SimpleComponent';

export class ConfiguratorStage extends SimpleComponent {
  constructor(props?: ComponentProps) {
    super('div', 'configurator-stage', undefined, undefined, props);
  }
}
