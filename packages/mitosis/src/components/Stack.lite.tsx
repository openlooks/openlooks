import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface StackProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Stack(props: StackProps) {
  return (
    <div
      id={props.id}
      class={buildOpenLooksClassName('stack', props.c, { justify: 'flex-start' })}
      style={props.sx as JSX.CSS | undefined}
    >
      {props.children}
    </div>
  );
}
