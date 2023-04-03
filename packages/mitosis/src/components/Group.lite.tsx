import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface GroupProps extends BaseComponentProps {
  position?: 'left' | 'center' | 'right' | 'apart';
  spacing?: Size;
}

export default function Group(props: GroupProps) {
  return (
    <div class={buildOpenLooksClassName('group', props, { spacing: 'sm' })} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
