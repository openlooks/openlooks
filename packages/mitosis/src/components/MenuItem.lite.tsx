import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface MenuItemProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  icon?: JSX.Element;
  onClick?: (e: any) => void;
  onMouseOver?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  children?: any;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <div
      id={props.id}
      class={buildOpenLooksClassName('menu-item', props.c)}
      style={props.sx as JSX.CSS | undefined}
      onClick={(event) => props.onClick?.(event)}
      onMouseOver={(event) => props.onMouseOver?.(event)}
      onMouseLeave={(event) => props.onMouseLeave?.(event)}
    >
      <Show when={props.icon}>
        <div class="icon">{props.icon}</div>
      </Show>
      <div class="label">{props.children}</div>
    </div>
  );
}
