import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface MenuProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Menu(props: MenuProps) {
  return (
    <div id={props.id} class={buildOpenLooksClassName('popover', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
