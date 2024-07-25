import { ComponentProps } from './Component';
import { SimpleComponent } from './SimpleComponent';

export class AppShell extends SimpleComponent {
  constructor(props?: ComponentProps) {
    super('div', 'appshell', undefined, undefined, props);
  }
}
