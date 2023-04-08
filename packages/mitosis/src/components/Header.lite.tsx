import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface HeaderProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Header(props: HeaderProps) {
  return (
    <header class={buildOpenLooksClassName('header', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </header>
  );
}
