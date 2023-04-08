import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface TabLabelProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function TabLabel(props: TabLabelProps) {
  return (
    <span class={buildOpenLooksClassName('tab-label', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </span>
  );
}
