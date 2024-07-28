import { createElement } from '../utils/dom';
import { Component, ComponentProps } from './Component';

export interface TitleProps extends ComponentProps {
  order: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

export class Title extends Component<HTMLHeadingElement, TitleProps> {
  constructor(public props: TitleProps) {
    super(props);
  }

  public createDom(): HTMLHeadingElement {
    this.element = createElement(`h${this.props.order}`, 'title');
    this.render();
    return this.element;
  }

  public render(): void {
    const el = this.element as HTMLHeadingElement;
    el.textContent = this.props.text;
  }
}
