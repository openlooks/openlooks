import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface ButtonProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  onClick?: (e: any) => void;
  children?: any;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      id={props.id}
      class={buildOpenLooksClassName('button', props.c, { variant: 'filled', color: 'blue', size: 'sm', radius: 'sm' })}
      style={props.sx as JSX.CSS | undefined}
      onClick={(event) => props.onClick?.(event)}
    >
      {props.children}
    </button>
  );
}
