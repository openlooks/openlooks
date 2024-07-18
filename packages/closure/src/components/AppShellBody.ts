import { Component, ComponentProps } from './Component';

export interface AppShellBodyProps extends ComponentProps {
  children: Component[];
}

export class AppShellBody extends Component<AppShellBodyProps, HTMLDivElement> {
  public createDom(): HTMLElement {
    this.element = this.createElement('div', 'body');
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
