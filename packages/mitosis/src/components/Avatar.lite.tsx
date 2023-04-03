import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Color, Size } from './BaseComponentProps';

export interface AvatarProps extends BaseComponentProps {
  src?: string;
  alt?: string;
  radius?: Size;
  size?: Size;
  color?: Color;
}

export default function Avatar(props: AvatarProps) {
  return (
    <div class={buildOpenLooksClassName('avatar', props, { color: 'gray' })} style={props.sx as JSX.CSS | undefined}>
      <div class="openlooks center">
        <Show when={props.src}>
          <img src={props.src} alt={props.alt} title={props.alt} />
        </Show>
        {props.children}
      </div>
    </div>
  );
}
