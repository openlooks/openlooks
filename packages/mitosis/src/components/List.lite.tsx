import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface ListProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function List(props: ListProps) {
  return (
    <ul id={props.id} class={buildOpenLooksClassName('text', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </ul>
  );
}
