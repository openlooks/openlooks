import { ComponentProps } from './Component';
import { SimpleComponent } from './SimpleComponent';

export class Stack extends SimpleComponent<ComponentProps, HTMLDivElement> {
  constructor(props?: ComponentProps) {
    super('div', 'stack', undefined, undefined, props);
  }
}
