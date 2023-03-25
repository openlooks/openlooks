import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export default function TabLabel(props: BaseComponentProps) {
  return (
    <span class={buildOpenLooksClassName('tab-label', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </span>
  );
}
