import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface ActionIconProps extends BaseComponentProps {
  variant?: 'filled' | 'light' | 'outline' | 'subtle';
  size?: Size;
  onClick?: (e: any) => void;
}

export default function ActionIcon(props: ActionIconProps) {
  return (
    <button
      class={buildOpenLooksClassName('actionicon', props)}
      style={props.sx as JSX.CSS | undefined}
      onClick={(event) => props.onClick?.(event)}
    >
      {props.children}
    </button>
  );
}