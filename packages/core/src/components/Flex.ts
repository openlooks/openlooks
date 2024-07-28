import { ComponentProps, Size } from './Component';
import { HtmlComponent } from './HtmlComponent';

export interface FlexProps extends ComponentProps {
  gap?: Size;
  justify?: string;
  align?: string;
  direction?: string;
  wrap?: string;
}

const classKeys: (keyof FlexProps)[] = ['gap', 'justify', 'align', 'direction', 'wrap'];

const defaultProps: FlexProps = { gap: 'md' };

export class Flex extends HtmlComponent<HTMLDivElement, FlexProps> {
  constructor(props?: ComponentProps) {
    super('div', 'flex', classKeys, defaultProps, props);
  }
}
