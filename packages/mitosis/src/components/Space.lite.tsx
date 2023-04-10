import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface SpaceProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
}

export default function Space(props: SpaceProps) {
  return (
    <div id={props.id} class={buildOpenLooksClassName('space', props.c)} style={props.sx as JSX.CSS | undefined} />
  );
}
