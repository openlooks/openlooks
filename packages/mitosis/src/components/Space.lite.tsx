import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface SpaceProps extends BaseComponentProps {
  h?: Size;
  w?: Size;
}

export default function Space(props: SpaceProps) {
  return <div class={buildOpenLooksClassName('space', props)} style={props.sx as JSX.CSS | undefined} />;
}
