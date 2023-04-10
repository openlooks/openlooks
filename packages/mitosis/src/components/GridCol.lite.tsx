import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface GridColProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function GridCol(props: GridColProps) {
  return (
    <div id={props.id} class={buildOpenLooksClassName('grid-col', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
