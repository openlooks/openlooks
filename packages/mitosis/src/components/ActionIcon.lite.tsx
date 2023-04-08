import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface ActionIconProps {
  title?: string;
  c?: string;
  sx?: Record<string, string | number>;
  children?: any;
  onClick?: (e: any) => void;
}

export default function ActionIcon(props: ActionIconProps) {
  return (
    <button
      class={buildOpenLooksClassName('actionicon', props.c)}
      style={props.sx as JSX.CSS | undefined}
      title={props.title}
      onClick={(event) => props.onClick?.(event)}
    >
      {props.children}
    </button>
  );
}
