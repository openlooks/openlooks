import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export interface MenuItemProps extends BaseComponentProps {
  icon?: JSX.Element;
  onClick?: (e: any) => void;
  onMouseOver?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <div
      class={buildOpenLooksClassName('menu-item', props)}
      style={props.sx as JSX.CSS | undefined}
      onClick={(event) => props.onClick?.(event)}
      onMouseOver={(event) => props.onMouseOver?.(event)}
      onMouseLeave={(event) => props.onMouseLeave?.(event)}
    >
      <Show when={props.icon}>
        <div className="icon">{props.icon}</div>
      </Show>
      <div class="label">{props.children}</div>
    </div>
  );
}
