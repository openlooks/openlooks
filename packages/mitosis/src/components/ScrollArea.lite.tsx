import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface ScrollAreaProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function ScrollArea(props: ScrollAreaProps) {
  return (
    <div
      class={buildOpenLooksClassName('scrollarea', props.c, { variant: 'hover', scrollbarSize: 'md' })}
      style={props.sx as JSX.CSS | undefined}
    >
      {props.children}
    </div>
  );
}
