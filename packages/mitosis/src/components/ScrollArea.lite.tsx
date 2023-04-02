import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface ScrollAreaProps extends BaseComponentProps {
  variant?: 'hover' | 'never' | 'always';
  scrollbarSize?: Size;
}

export default function ScrollArea(props: ScrollAreaProps) {
  return (
    <div
      class={buildOpenLooksClassName('scrollarea', props, { variant: 'hover', scrollbarSize: 'md' })}
      style={props.sx as JSX.CSS | undefined}
    >
      {props.children}
    </div>
  );
}
