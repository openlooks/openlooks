import { ComponentProps } from './Component';
import { SimpleComponent } from './SimpleComponent';

export class AppShellBody extends SimpleComponent {
  constructor(props?: ComponentProps) {
    super('div', 'body', undefined, undefined, props);
  }
}
