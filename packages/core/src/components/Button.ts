import { Color, ComponentProps, Size } from './Component';
import { HtmlComponent } from './HtmlComponent';

export interface ButtonProps extends ComponentProps {
  text: string;
  variant?: string;
  color?: Color;
  size?: Size;
  radius?: Size;
  onClick?: (e: MouseEvent) => void;
}

const classKeys: (keyof ButtonProps)[] = ['variant', 'color', 'size', 'radius'];

const defaultProps: Partial<ButtonProps> = {
  variant: 'filled',
  color: 'blue',
  size: 'sm',
  radius: 'sm',
};

export class Button extends HtmlComponent<HTMLButtonElement, ButtonProps> {
  constructor(public props: ButtonProps) {
    super('button', 'button', classKeys, defaultProps, props);
  }

  public decorateDom(element: HTMLButtonElement): void {
    super.decorateDom(element);
    if (this.props.onClick) {
      element.addEventListener('click', this.props.onClick);
    }
  }

  public render(): void {
    const el = this.element as HTMLButtonElement;
    el.textContent = this.props.text;
  }
}
