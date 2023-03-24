import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export interface TitleProps extends BaseComponentProps {
  order: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Title(props: TitleProps) {
  // TODO: Figure out how to use Solid "Dynamic" in Mitosis
  return (
    <>
      <Show when={props.order === 1}>
        <h1 class={buildOpenLooksClassName('title', props)} style={props.sx as JSX.CSS | undefined}>
          {props.children}
        </h1>
      </Show>
      <Show when={props.order === 2}>
        <h2 class={buildOpenLooksClassName('title', props)} style={props.sx as JSX.CSS | undefined}>
          {props.children}
        </h2>
      </Show>
      <Show when={props.order === 3}>
        <h3 class={buildOpenLooksClassName('title', props)} style={props.sx as JSX.CSS | undefined}>
          {props.children}
        </h3>
      </Show>
      <Show when={props.order === 4}>
        <h4 class={buildOpenLooksClassName('title', props)} style={props.sx as JSX.CSS | undefined}>
          {props.children}
        </h4>
      </Show>
      <Show when={props.order === 5}>
        <h5 class={buildOpenLooksClassName('title', props)} style={props.sx as JSX.CSS | undefined}>
          {props.children}
        </h5>
      </Show>
      <Show when={props.order === 6}>
        <h6 class={buildOpenLooksClassName('title', props)} style={props.sx as JSX.CSS | undefined}>
          {props.children}
        </h6>
      </Show>
    </>
  );
}
