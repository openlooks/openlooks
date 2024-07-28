import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export interface TableProps extends ComponentProps {
  innerHTML?: string;
}

export class Table extends HtmlComponent<HTMLTableElement, TableProps> {
  constructor(props?: TableProps) {
    super('table', 'table', undefined, undefined, props);
  }

  render(): void {
    super.render();
    if (this.element && this.props?.innerHTML) {
      this.element.innerHTML = this.props.innerHTML;
    }
  }
}
