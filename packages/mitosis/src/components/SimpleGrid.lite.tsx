import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface SimpleGridProps extends BaseComponentProps {
  cols: number;
  spacing?: Size;
  verticalSpacing?: Size;
}

export default function SimpleGrid(props: SimpleGridProps) {
  return (
    <div class={buildOpenLooksClassName('simplegrid', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
