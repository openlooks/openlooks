import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface ContainerProps extends BaseComponentProps {
  size?: Size;
}

export default function Container(props: ContainerProps) {
  return (
    <div class={buildOpenLooksClassName('container', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
