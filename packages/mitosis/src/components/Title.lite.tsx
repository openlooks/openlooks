import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface TitleProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  order?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: any;
}

export default function Title(props: TitleProps) {
  // TODO: Figure out how to use Solid "Dynamic" in Mitosis
  return (
    <>
      <Show when={props.order === 1 || props.order === undefined}>
        <h1 class={buildOpenLooksClassName('title', props.c)} style={props.sx as JSX.CSS | undefined}>
          {props.children}
        </h1>
      </Show>
      <Show when={props.order === 2}>
        <h2 class={buildOpenLooksClassName('title', props.c)} style={props.sx as JSX.CSS | undefined}>
          {props.children}
        </h2>
      </Show>
      <Show when={props.order === 3}>
        <h3 class={buildOpenLooksClassName('title', props.c)} style={props.sx as JSX.CSS | undefined}>
          {props.children}
        </h3>
      </Show>
      <Show when={props.order === 4}>
        <h4 class={buildOpenLooksClassName('title', props.c)} style={props.sx as JSX.CSS | undefined}>
          {props.children}
        </h4>
      </Show>
      <Show when={props.order === 5}>
        <h5 class={buildOpenLooksClassName('title', props.c)} style={props.sx as JSX.CSS | undefined}>
          {props.children}
        </h5>
      </Show>
      <Show when={props.order === 6}>
        <h6 class={buildOpenLooksClassName('title', props.c)} style={props.sx as JSX.CSS | undefined}>
          {props.children}
        </h6>
      </Show>
    </>
  );
}
