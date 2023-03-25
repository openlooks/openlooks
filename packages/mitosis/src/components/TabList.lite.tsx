import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export default function TabList(props: BaseComponentProps) {
  return (
    <div class={buildOpenLooksClassName('tablist', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
