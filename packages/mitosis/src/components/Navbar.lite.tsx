import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface NavbarProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children: any;
}

export default function Navbar(props: NavbarProps) {
  return (
    <nav
      id={props.id}
      class={buildOpenLooksClassName('navbar scrollarea', props.c)}
      style={props.sx as JSX.CSS | undefined}
    >
      {props.children}
    </nav>
  );
}
