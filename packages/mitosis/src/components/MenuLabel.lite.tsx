import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export default function MenuLabel(props: BaseComponentProps) {
  return (
    <div class={buildOpenLooksClassName('menu-label', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
