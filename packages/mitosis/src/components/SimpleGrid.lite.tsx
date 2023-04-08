import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface SimpleGridProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function SimpleGrid(props: SimpleGridProps) {
  return (
    <div class={buildOpenLooksClassName('simplegrid', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
