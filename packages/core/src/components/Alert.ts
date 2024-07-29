import { addChildren } from '../utils/addchild';
import { Color, Component, ComponentProps, Size } from './Component';
import { HtmlComponent } from './HtmlComponent';

export interface AlertProps extends ComponentProps {
  variant?: string;
  color?: Color;
  radius?: Size;
  icon?: Component;
  title: string;
  // message?: string;
}

const classKeys: (keyof AlertProps)[] = ['variant', 'color', 'radius'];

const defaultProps: Partial<AlertProps> = { variant: 'light', color: 'blue', radius: 'sm' };

export class Alert extends HtmlComponent<HTMLDivElement, AlertProps> {
  constructor(public props: AlertProps) {
    super('div', 'alert', classKeys, defaultProps, props);
  }

  public createDom(): HTMLDivElement {
    this.element = super.createDom();

    const iconDiv = document.createElement('div');
    iconDiv.className = 'alert-icon';
    if (this.props.icon) {
      iconDiv.appendChild(this.props.icon.createDom());
    }
    this.element.appendChild(iconDiv);

    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'alert-body';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'alert-title';
    titleDiv.innerText = this.props.title;
    bodyDiv.appendChild(titleDiv);

    addChildren(bodyDiv, this.props.children);

    this.element.appendChild(bodyDiv);
    return this.element;
  }
}
