import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export interface MenuItemProps extends BaseComponentProps {
  icon?: JSX.Element;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <div class={buildOpenLooksClassName('menu-item', props)} style={props.sx as JSX.CSS | undefined}>
      <div class="icon">{props.icon}</div>
      <div class="label">{props.children}</div>
    </div>
  );
}
