import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface ActionIconProps {
  id?: string;
  c?: string;
  sx?: Record<string, string | number>;
  children?: any;
  title?: string;
  onClick?: (e: any) => void;
}

export default function ActionIcon(props: ActionIconProps) {
  return (
    <button
      id={props.id}
      class={buildOpenLooksClassName('actionicon', props.c, { color: 'gray' })}
      style={props.sx as JSX.CSS | undefined}
      title={props.title}
      onClick={(event) => props.onClick?.(event)}
    >
      {props.children}
    </button>
  );
}
