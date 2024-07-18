import { Component, ComponentProps } from './Component';

export interface RouteProps extends ComponentProps {
  path: string;
  children: Component;
}

export class Route extends Component<RouteProps, HTMLDivElement> {
  public createDom(): HTMLElement {
    this.element = document.createElement('div');
    this.element.appendChild(this.props.children.createDom());
    return this.element;
  }

  public render(): void {
    this.props.children.render();
  }
}
