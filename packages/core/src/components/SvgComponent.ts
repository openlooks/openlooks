import { Component, ComponentProps } from './Component';

export interface SvgComponentProps extends ComponentProps {
  svg: string;
}

export class SvgComponent extends Component<SVGElement, ComponentProps> {
  constructor(public props: SvgComponentProps) {
    super(props);
  }

  public createDom(): SVGElement {
    const div = document.createElement('div');
    div.innerHTML = this.props.svg;
    this.element = div.firstChild as SVGElement;
    return this.element;
  }
}
