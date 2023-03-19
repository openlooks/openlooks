import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export default function Header(props: BaseComponentProps) {
  return (
    <header class={buildOpenLooksClassName('header', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </header>
  );
}
