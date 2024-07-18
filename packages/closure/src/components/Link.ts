import { Component } from './Component';
import { navigate } from './Router';
import { TextProps } from './Text';

export interface LinkProps extends TextProps {
  href: string;
}

export class Link extends Component<LinkProps, HTMLAnchorElement> {
  public createDom(): HTMLElement {
    this.element = this.createElement('a', 'anchor text');
    this.element.addEventListener('click', this.onClick.bind(this));
    this.render();
    return this.element;
  }

  public render(): void {
    const el = this.element as HTMLAnchorElement;
    el.href = this.props.href;
    el.textContent = this.props.text;
  }

  public onClick(e: MouseEvent) {
    e.preventDefault();
    navigate(this.props.href);
  }
}
