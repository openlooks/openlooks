import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface CenterProps extends BaseComponentProps {
  size?: Size;
}

export default function Center(props: CenterProps) {
  return (
    <div class={buildOpenLooksClassName('center', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
