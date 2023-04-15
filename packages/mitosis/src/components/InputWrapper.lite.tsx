import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface InputWrapperProps {
  id: string;
  c?: string;
  sx?: Record<string, any>;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  children?: any;
}

export default function InputWrapper(props: InputWrapperProps) {
  return (
    <div class={buildOpenLooksClassName('inputwrapper', props.c)} style={props.sx as JSX.CSS | undefined}>
      <Show when={props.label}>
        <label for={props.id} class="label">
          {props.label}
          <Show when={props.required}>
            <span class="required">{` *`}</span>
          </Show>
        </label>
      </Show>
      <Show when={props.description}>
        <div class="description">{props.description}</div>
      </Show>
      {props.children}
      <Show when={props.error}>
        <div class="error">{props.error}</div>
      </Show>
    </div>
  );
}
