import { ComponentProps } from './Component';
import { SimpleComponent } from './SimpleComponent';

export class Header extends SimpleComponent {
  constructor(props?: ComponentProps) {
    super('div', 'header', undefined, undefined, props);
  }
}
