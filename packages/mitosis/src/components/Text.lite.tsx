import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface TextProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Text(props: TextProps) {
  return (
    <div class={buildOpenLooksClassName('text', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
