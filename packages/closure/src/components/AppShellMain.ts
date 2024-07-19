import { ComponentProps } from './Component';
import { SimpleComponent } from './SimpleComponent';

export class AppShellMain extends SimpleComponent {
  constructor(props?: ComponentProps) {
    super('main', 'main scrollarea', props);
  }
}
