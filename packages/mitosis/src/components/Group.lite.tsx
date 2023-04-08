import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface GroupProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Group(props: GroupProps) {
  return (
    <div class={buildOpenLooksClassName('group', props.c, { spacing: 'sm' })} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
