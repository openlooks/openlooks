import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export default function TabIcon(props: BaseComponentProps) {
  return (
    <span class={buildOpenLooksClassName('tab-icon', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </span>
  );
}
