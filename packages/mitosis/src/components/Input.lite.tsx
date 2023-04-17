import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface InputProps {
  id: string;
  c?: string;
  sx?: Record<string, any>;
  type: string;
  defaultValue?: string;
  placeholder?: string;
  invalid?: boolean;
  icon?: JSX.Element;
  rightSection?: JSX.Element;
  onChange?: (e: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <div style={{ position: 'relative' }}>
      <Show when={props.icon}>
        <div class="leftSection">{props.icon}</div>
      </Show>
      <input
        id={props.id}
        class={buildOpenLooksClassName('textinput', props.c)}
        style={props.sx as JSX.CSS | undefined}
        type={props.type}
        value={props.defaultValue || ''}
        placeholder={props.placeholder}
        aria-invalid={props.invalid}
        onChange={(event) => props.onChange?.(event)}
        onInput={(event) => props.onChange?.(event)}
      />
      <Show when={props.rightSection}>
        <div class="rightSection">{props.rightSection}</div>
      </Show>
    </div>
  );
}
