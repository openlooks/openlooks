import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface CenterProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Center(props: CenterProps) {
  return (
    <div class={buildOpenLooksClassName('center', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
