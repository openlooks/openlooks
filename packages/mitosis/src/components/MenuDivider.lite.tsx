import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export default function MenuDivider(props: BaseComponentProps) {
  return (
    <div class={buildOpenLooksClassName('menu-divider', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
