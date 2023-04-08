import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface ContainerProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Container(props: ContainerProps) {
  return (
    <div class={buildOpenLooksClassName('container', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
