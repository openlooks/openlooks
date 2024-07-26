import { createElement } from '../utils/dom';
import { Component } from './Component';
import { navigate, Router } from './Router';
import { TextProps } from './Text';

export interface LinkProps extends TextProps {
  href: string;
}

export class Link extends Component<LinkProps, HTMLAnchorElement> {
  constructor(public props: LinkProps) {
    super(props);
  }

  public createDom(): HTMLAnchorElement {
    this.element = createElement('a', 'anchor text', undefined, undefined, this.props);
    this.element.addEventListener('click', this.onClick.bind(this));
    Router.instance.eventTarget.addEventListener('change', () => {
      if (this.element) {
        if (Router.instance.currentUrl === this.props.href) {
          this.element.setAttribute('aria-current', 'page');
        } else {
          this.element.removeAttribute('aria-current');
        }
      }
    });
    this.render();
    return this.element;
  }

  public render(): void {
    const el = this.element as HTMLAnchorElement;
    el.href = this.props.href;
    el.textContent = this.props.text;
  }

  public onClick(e: MouseEvent) {
    if (e.button !== 0) {
      return;
    }
    e.preventDefault();
    navigate(this.props.href);
  }
}
