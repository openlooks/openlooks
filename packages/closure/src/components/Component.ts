import { buildOpenLooksClassName } from '../utils/classname';

export interface ComponentProps {
  id?: string;
  className?: string;
  style?: CSSStyleDeclaration;
}

export abstract class Component<
  TProps extends ComponentProps = ComponentProps,
  TElement extends HTMLElement = HTMLElement,
> {
  public element?: TElement;

  constructor(public props: TProps) {}

  public abstract createDom(): HTMLElement;

  public createElement<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    baseName: string
  ): HTMLElementTagNameMap[K] {
    const el = document.createElement(tagName);
    el.className = buildOpenLooksClassName(baseName, this.props.className);
    if (this.props.id) {
      el.id = this.props.id;
    }
    if (this.props.style) {
      Object.assign(el.style, this.props.style);
    }
    return el;
  }

  public updateProps(props: TProps): void {
    this.props = props;
    this.render();
  }

  public render(): void {}
}
