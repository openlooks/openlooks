import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface GridProps extends BaseComponentProps {
  gutter?: Size;
}

export default function Grid(props: GridProps) {
  return (
    <div class={buildOpenLooksClassName('grid', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
