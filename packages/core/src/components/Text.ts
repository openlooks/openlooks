import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export interface TextProps extends ComponentProps {
  text: string;
}

export class Text extends HtmlComponent<HTMLDivElement, TextProps> {
  constructor(public props: TextProps) {
    super('div', 'text', undefined, undefined, props);
  }

  public render(): void {
    const el = this.element as HTMLDivElement;
    el.textContent = this.props.text;
  }
}
