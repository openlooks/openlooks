import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface MenuProps extends BaseComponentProps {
  size?: Size;
}

export default function Menu(props: MenuProps) {
  return (
    <div class={buildOpenLooksClassName('popover', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
