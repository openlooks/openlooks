import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface PaperProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Paper(props: PaperProps) {
  return (
    <div class={buildOpenLooksClassName('paper', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
