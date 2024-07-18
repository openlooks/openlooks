import { Component, ComponentProps } from './Component';

export interface AppShellProps extends ComponentProps {
  children: Component[];
}

export class AppShell extends Component<AppShellProps, HTMLDivElement> {
  public createDom(): HTMLElement {
    this.element = this.createElement('div', 'appshell');
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
