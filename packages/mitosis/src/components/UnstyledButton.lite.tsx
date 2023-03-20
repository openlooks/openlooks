import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export interface UnstyledButtonProps extends BaseComponentProps {
  onClick?: (e: any) => void;
}

export default function UnstyledButton(props: UnstyledButtonProps) {
  return (
    <button
      class={buildOpenLooksClassName('unstyled-button', props)}
      style={props.sx as JSX.CSS | undefined}
      onClick={(event) => props.onClick?.(event)}
    >
      {props.children}
    </button>
  );
}
