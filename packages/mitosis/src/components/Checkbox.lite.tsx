import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface CheckboxProps {
  id: string;
  c?: string;
  sx?: Record<string, any>;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  defaultChecked?: boolean;
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <>
      <div class={buildOpenLooksClassName('checkbox', props.c)} style={props.sx as JSX.CSS | undefined}>
        <div>
          <input
            class={buildOpenLooksClassName('checkbox', props.c)}
            type="checkbox"
            value="on"
            checked={props.defaultChecked}
          />
        </div>
        <div class="openlooks inputwrapper">
          <label for={props.id}>{props.label}</label>
          <Show when={props.description}>
            <div class="description">{props.description}</div>
          </Show>
          <Show when={props.error}>
            <div class="error">{props.error}</div>
          </Show>
        </div>
      </div>
    </>
  );
}
