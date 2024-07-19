import { Component, ComponentProps } from './Component';

export class SimpleComponent extends Component<ComponentProps, HTMLElement> {
  constructor(
    public tagName: keyof HTMLElementTagNameMap,
    public baseClassName: string,
    props?: ComponentProps
  ) {
    super(props);
  }

  public createDom(): HTMLElement {
    this.element = this.createElement(this.tagName, this.baseClassName);
    if (this.props?.children) {
      for (const child of this.props.children) {
        this.element.appendChild(child.createDom());
      }
    }
    return this.element;
  }

  public render(): void {
    if (this.props?.children) {
      for (const child of this.props.children) {
        child.render();
      }
    }
  }
}
