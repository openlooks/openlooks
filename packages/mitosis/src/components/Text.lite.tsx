import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface TextProps extends BaseComponentProps {
  size?: Size;
}

export default function Text(props: TextProps) {
  return (
    <p class={buildOpenLooksClassName('text', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </p>
  );
}
