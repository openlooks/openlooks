import { Color, ComponentProps, Size } from './Component';
import { HtmlComponent } from './HtmlComponent';

export interface BadgeProps extends ComponentProps {
  text: string;
  variant?: string;
  color?: Color;
  size?: Size;
  radius?: Size;
}

const classKeys: (keyof BadgeProps)[] = ['variant', 'color', 'size', 'radius'];

const defaultProps: Partial<BadgeProps> = {
  variant: 'light',
  color: 'blue',
  size: 'md',
  radius: 'xl',
};

export class Badge extends HtmlComponent<HTMLDivElement, BadgeProps> {
  constructor(public props: BadgeProps) {
    super('div', 'badge', classKeys, defaultProps, props);
  }

  public render(): void {
    const el = this.element as HTMLDivElement;
    el.textContent = this.props.text;
  }
}
