import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface TabListProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function TabList(props: TabListProps) {
  return (
    <div id={props.id} class={buildOpenLooksClassName('tablist', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
