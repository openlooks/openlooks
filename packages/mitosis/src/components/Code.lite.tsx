import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface CodeProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  block?: boolean;
  children?: any;
}

export default function Code(props: CodeProps) {
  return (
    <>
      <Show when={props.block}>
        <pre
          class={buildOpenLooksClassName('code', props.c, { color: 'gray' })}
          style={props.sx as JSX.CSS | undefined}
        >
          <code
            class={buildOpenLooksClassName('code', props.c, { color: 'gray' })}
            style={props.sx as JSX.CSS | undefined}
          >
            {props.children}
          </code>
        </pre>
      </Show>
      <Show when={!props.block}>
        <code
          class={buildOpenLooksClassName('code', props.c, { color: 'gray' })}
          style={props.sx as JSX.CSS | undefined}
        >
          {props.children}
        </code>
      </Show>
    </>
  );
}
