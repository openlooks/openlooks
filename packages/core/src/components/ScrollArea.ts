import { ComponentProps } from './Component';
import { HtmlComponent } from './HtmlComponent';

export interface ScrollAreaProps extends ComponentProps {
  variant?: string;
  scrollbarSize?: string;
}

const classKeys: (keyof ScrollAreaProps)[] = ['variant', 'scrollbarSize'];

const defaultProps: Partial<ScrollAreaProps> = {
  variant: 'hover',
  scrollbarSize: 'md',
};

export class ScrollArea extends HtmlComponent<HTMLDivElement, ScrollAreaProps> {
  constructor(props?: ComponentProps) {
    super('div', 'scrollarea', classKeys, defaultProps, props);
  }
}
