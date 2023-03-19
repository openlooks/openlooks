import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface StackProps extends BaseComponentProps {
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end';
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  spacing?: Size;
}

export default function Stack(props: StackProps) {
  return (
    <div class={buildOpenLooksClassName('stack', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
