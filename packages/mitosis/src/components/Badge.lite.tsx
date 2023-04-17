import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface BadgeProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Badge(props: BadgeProps) {
  return (
    <div
      id={props.id}
      class={buildOpenLooksClassName('badge', props.c, { variant: 'light', color: 'blue', size: 'md', radius: 'xl' })}
      style={props.sx as JSX.CSS | undefined}
    >
      {props.children}
    </div>
  );
}
