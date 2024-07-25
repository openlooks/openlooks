import { Component, ComponentProps } from './Component';

export class Fragment extends Component<ComponentProps, DocumentFragment> {
  public createDom(): DocumentFragment {
    this.element = document.createDocumentFragment();
    if (this.props?.children) {
      for (const child of this.props.children) {
        this.element.appendChild(child instanceof Component ? child.createDom() : child);
      }
    }
    this.render();
    return this.element;
  }
}
