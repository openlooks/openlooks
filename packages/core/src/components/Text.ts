import { createElement } from '../utils/dom';
import { Component, ComponentProps } from './Component';

export interface TextProps extends ComponentProps {
  text: string;
}

export class Text extends Component<TextProps, HTMLDivElement> {
  constructor(public props: TextProps) {
    super(props);
  }

  public createDom(): HTMLDivElement {
    this.element = createElement('div', 'text');
    this.render();
    return this.element;
  }

  public render(): void {
    const el = this.element as HTMLDivElement;
    el.textContent = this.props.text;
  }
}
