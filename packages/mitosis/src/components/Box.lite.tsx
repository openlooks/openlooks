import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface BoxProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Box(props: BoxProps) {
  return (
    <div class={buildOpenLooksClassName('', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
