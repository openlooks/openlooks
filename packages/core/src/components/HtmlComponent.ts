import { addChildren } from '../utils/addchild';
import { createElement, updateElement } from '../utils/dom';
import { Component, ComponentProps } from './Component';

export class HtmlComponent<
  TElement extends HTMLElement = HTMLElement,
  TProps extends ComponentProps = ComponentProps,
> extends Component<TElement, TProps> {
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
    this.decorateDom(this.element);
    addChildren(this.element, this.props?.children);
    return this.element;
  }

  public decorateDom(element: TElement): void {
    super.decorateDom(element);
    updateElement(
      this.element as TElement,
      this.baseClassName,
      this.classKeys,
      this.defaultProps,
      this.props
    );
  }

  public updateProps(props: TProps): void {
    super.updateProps(props);
    updateElement(
      this.element as TElement,
      this.baseClassName,
      this.classKeys,
      this.defaultProps,
      this.props
    );
  }
}
