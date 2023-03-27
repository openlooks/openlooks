import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export interface GridColProps extends BaseComponentProps {
  span?: number;
}

export default function GridCol(props: GridColProps) {
  return (
    <div class={buildOpenLooksClassName('grid-col', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
