import { ComponentProps, Size } from './Component';
import { HtmlComponent } from './HtmlComponent';

export interface GroupProps extends ComponentProps {
  position?: string;
  spacing?: Size;
  grow?: boolean;
}

const classKeys: (keyof GroupProps)[] = ['position', 'spacing', 'grow'];

const defaultProps: GroupProps = { spacing: 'sm' };

export class Group extends HtmlComponent<HTMLDivElement, GroupProps> {
  constructor(props?: ComponentProps) {
    super('div', 'group', classKeys, defaultProps, props);
  }
}
