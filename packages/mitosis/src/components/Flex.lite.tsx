import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface FlexProps extends BaseComponentProps {
  gap?: Size;
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export default function Flex(props: FlexProps) {
  return (
    <div class={buildOpenLooksClassName('flex', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
