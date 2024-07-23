import { createElement } from '../utils/dom';
import { Component, ComponentProps } from './Component';

// Better names: HtmlComponent?

export class SimpleComponent<
  TProps extends ComponentProps = ComponentProps,
  TElement extends HTMLElement = HTMLElement,
> extends Component<TProps, TElement> {
  constructor(
    public tagName: keyof HTMLElementTagNameMap,
    public baseClassName: string,
    public classKeys?: (keyof TProps)[],
    public defaultProps?: Partial<TProps>,
    props?: TProps
  ) {
    super(props);
  }

  public createDom(): TElement {
    this.element = createElement(
      this.tagName,
      this.baseClassName,
      this.classKeys,
      this.defaultProps,
      this.props
    ) as TElement;
    if (this.props?.children) {
      for (const child of this.props.children) {
        this.element.appendChild(child instanceof Component ? child.createDom() : child);
      }
    }
    return this.element;
  }
}
