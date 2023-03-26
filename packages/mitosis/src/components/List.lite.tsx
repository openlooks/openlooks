import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export default function List(props: BaseComponentProps) {
  return (
    <ul class={buildOpenLooksClassName('text', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </ul>
  );
}
