import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface TabIconProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function TabIcon(props: TabIconProps) {
  return (
    <span class={buildOpenLooksClassName('tab-icon', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </span>
  );
}
