import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface MenuDividerProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function MenuDivider(props: MenuDividerProps) {
  return (
    <div class={buildOpenLooksClassName('menu-divider', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
