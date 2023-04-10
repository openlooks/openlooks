import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface MenuLabelProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function MenuLabel(props: MenuLabelProps) {
  return (
    <div id={props.id} class={buildOpenLooksClassName('menu-label', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
