import { Component, ComponentProps } from './Component';

export interface TextProps extends ComponentProps {
  text: string;
}

export class Text extends Component<TextProps, HTMLDivElement> {
  public createDom(): HTMLElement {
    this.element = this.createElement('div', 'text');
    this.render();
    return this.element;
  }

  public render(): void {
    const el = this.element as HTMLDivElement;
    el.textContent = this.props.text;
  }
}
