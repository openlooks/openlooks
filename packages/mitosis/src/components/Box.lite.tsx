import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export default function Box(props: BaseComponentProps) {
  return (
    <div class={buildOpenLooksClassName('', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
