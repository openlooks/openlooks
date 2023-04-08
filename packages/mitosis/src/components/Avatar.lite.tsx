import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface AvatarProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  src?: string;
  alt?: string;
  children?: any;
}

export default function Avatar(props: AvatarProps) {
  return (
    <div class={buildOpenLooksClassName('avatar', props.c, { color: 'gray' })} style={props.sx as JSX.CSS | undefined}>
      <div class="openlooks center">
        <Show when={props.src}>
          <img src={props.src} alt={props.alt} title={props.alt} />
        </Show>
        {props.children}
      </div>
    </div>
  );
}
