import { Component, ComponentProps } from './Component';

export interface AppShellMainProps extends ComponentProps {
  children: Component[];
}

export class AppShellMain extends Component<AppShellMainProps, HTMLElement> {
  public createDom(): HTMLElement {
    this.element = this.createElement('main', 'main scrollarea');
    for (const child of this.props.children) {
      this.element.appendChild(child.createDom());
    }
    return this.element;
  }

  public render(): void {
    for (const child of this.props.children) {
      child.render();
    }
  }
}
