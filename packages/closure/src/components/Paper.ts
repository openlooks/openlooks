import { ComponentProps } from './Component';
import { SimpleComponent } from './SimpleComponent';

export class Paper extends SimpleComponent {
  constructor(props?: ComponentProps) {
    super('div', 'paper', undefined, undefined, props);
  }
}
