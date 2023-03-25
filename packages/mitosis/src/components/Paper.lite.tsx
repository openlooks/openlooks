import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface PaperProps extends BaseComponentProps {
  shadow?: Size;
  radius?: Size;
  withBorder?: boolean;
}

export default function Paper(props: PaperProps) {
  return (
    <div class={buildOpenLooksClassName('paper', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
