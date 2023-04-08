import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface FlexProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Flex(props: FlexProps) {
  return (
    <div class={buildOpenLooksClassName('flex', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
