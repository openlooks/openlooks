import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface CardProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Card(props: CardProps) {
  return (
    <div id={props.id} class={buildOpenLooksClassName('card paper', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
