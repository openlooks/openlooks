import { ComponentProps, Size } from './Component';
import { SimpleComponent } from './SimpleComponent';

export interface GroupProps extends ComponentProps {
  position?: string;
  spacing?: Size;
  grow?: boolean;
}

const classKeys: (keyof GroupProps)[] = ['position', 'spacing', 'grow'];

const defaultProps: GroupProps = { spacing: 'sm' };

export class Group extends SimpleComponent<GroupProps, HTMLDivElement> {
  constructor(props?: ComponentProps) {
    super('div', 'group', classKeys, defaultProps, props);
  }
}
