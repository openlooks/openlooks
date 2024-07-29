import { Color, ComponentProps, Size } from './Component';
import { HtmlComponent } from './HtmlComponent';

export interface ActionIconProps extends ComponentProps {
  color?: Color;
  size?: Size;
  radius?: Size;
  variant?: string;
  onClick?: (e: MouseEvent) => void;
}

const classKeys: (keyof ActionIconProps)[] = ['variant', 'color', 'size', 'radius'];

const defaultProps: Partial<ActionIconProps> = {
  variant: 'filled',
  color: 'gray',
  size: 'sm',
  radius: 'sm',
};

export class ActionIcon extends HtmlComponent<HTMLButtonElement, ActionIconProps> {
  constructor(public props: ActionIconProps) {
    super('button', 'actionicon', classKeys, defaultProps, props);
  }

  public decorateDom(element: HTMLButtonElement): void {
    super.decorateDom(element);
    if (this.props.onClick) {
      element.addEventListener('click', this.props.onClick);
    }
  }
}
