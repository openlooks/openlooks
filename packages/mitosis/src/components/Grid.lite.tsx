import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface GridProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Grid(props: GridProps) {
  return (
    <div class={buildOpenLooksClassName('grid', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
