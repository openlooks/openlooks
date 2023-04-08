import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface UnstyledButtonProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  onClick?: (e: any) => void;
  children?: any;
}

export default function UnstyledButton(props: UnstyledButtonProps) {
  return (
    <button
      class={buildOpenLooksClassName('unstyled-button', props.c)}
      style={props.sx as JSX.CSS | undefined}
      onClick={(event) => props.onClick?.(event)}
    >
      {props.children}
    </button>
  );
}
