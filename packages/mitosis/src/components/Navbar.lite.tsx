import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export interface NavbarProps extends BaseComponentProps {
  children: any;
}

export default function Navbar(props: NavbarProps) {
  return (
    <nav class={buildOpenLooksClassName('navbar scrollarea', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </nav>
  );
}
