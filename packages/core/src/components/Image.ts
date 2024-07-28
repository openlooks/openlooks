import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export interface ImageProps extends ComponentProps {
  src: string;
  alt: string;
}

export class Image extends HtmlComponent<HTMLImageElement, ImageProps> {
  constructor(public props: ImageProps) {
    super('img', 'image', undefined, undefined, props);
  }

  public render(): void {
    const el = this.element as HTMLImageElement;
    el.src = this.props.src;
    el.alt = this.props.alt;
  }
}
