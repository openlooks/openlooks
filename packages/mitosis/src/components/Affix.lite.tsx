import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface AffixProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Affix(props: AffixProps) {
  return (
    <div id={props.id} class={buildOpenLooksClassName('affix', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
