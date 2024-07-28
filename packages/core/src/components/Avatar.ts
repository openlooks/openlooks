import { Color, Component, ComponentProps, Size } from './Component';
import { HtmlComponent } from './HtmlComponent';

export interface AvatarProps extends ComponentProps {
  color?: Color;
  radius?: Size;
  src?: string;
  alt?: string;
  title?: string;
  text?: string;
  icon?: Component;
}

const classKeys: (keyof AvatarProps)[] = ['color', 'radius'];

const defaultProps: AvatarProps = { color: 'gray', radius: 'xl' };

export class Avatar extends HtmlComponent<HTMLDivElement, AvatarProps> {
  constructor(props?: AvatarProps) {
    super('div', 'avatar', classKeys, defaultProps, props);
  }

  public createDom(): HTMLDivElement {
    const element = super.createDom();
    const center = document.createElement('div');
    center.className = 'openlooks center';
    element.appendChild(center);

    if (this.props?.src) {
      const img = document.createElement('img');
      img.src = this.props.src;
      if (this.props.title) {
        img.title = this.props.title;
      }
      if (this.props.alt) {
        img.alt = this.props.alt;
      }
      center.appendChild(img);
    } else if (this.props?.icon) {
      center.appendChild(this.props.icon.createDom());
    } else if (this.props?.text) {
      center.textContent = this.props.text;
    }

    return element;
  }
}
