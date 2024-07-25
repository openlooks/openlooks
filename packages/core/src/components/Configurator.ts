import { ComponentProps } from './Component';
import { SimpleComponent } from './SimpleComponent';

export class Configurator extends SimpleComponent {
  constructor(props?: ComponentProps) {
    super('div', 'configurator', undefined, undefined, props);
  }
}
