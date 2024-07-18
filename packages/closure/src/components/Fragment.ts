import { Component, ComponentProps } from './Component';

export interface FragmentProps extends ComponentProps {
  children: Component[];
}

export class Fragment extends Component<FragmentProps, HTMLDivElement> {
  public createDom(): HTMLElement {
    this.element = document.createElement('div');
    for (const child of this.props.children) {
      this.element.appendChild(child.createDom());
    }
    this.render();
    return this.element;
  }

  public render(): void {
    for (const child of this.props.children) {
      child.render();
    }
  }
}
