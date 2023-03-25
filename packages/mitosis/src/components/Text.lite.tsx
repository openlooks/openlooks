import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface TextProps extends BaseComponentProps {
  size?: Size;
  fz?: Size;
  fw?: number;
  fs?: 'italic';
  td?: 'underline' | 'line-through';
  tt?: 'uppercase' | 'capitalize';
  ta?: 'center' | 'right';
}

export default function Text(props: TextProps) {
  return (
    <div class={buildOpenLooksClassName('text', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
