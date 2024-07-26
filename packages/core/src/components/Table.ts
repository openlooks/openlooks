import { ComponentProps } from './Component';
import { SimpleComponent } from './SimpleComponent';

export interface TableProps extends ComponentProps {
  innerHTML?: string;
}

export class Table extends SimpleComponent<TableProps, HTMLTableElement> {
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
