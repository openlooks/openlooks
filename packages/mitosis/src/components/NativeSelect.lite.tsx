import { For } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import InputWrapper from './InputWrapper.lite';

export interface NativeSelectProps {
  id: string;
  c?: string;
  sx?: Record<string, any>;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  data: string[];
  defaultValue?: string;
  onChange?: (e: any) => void;
}

export default function NativeSelect(props: NativeSelectProps) {
  return (
    <InputWrapper
      id={props.id}
      label={props.label}
      description={props.description}
      error={props.error}
      required={props.required}
    >
      <select
        id={props.id}
        class={buildOpenLooksClassName('nativeselect', props.c)}
        style={props.sx as JSX.CSS | undefined}
        value={props.defaultValue}
        onChange={(event) => props.onChange?.(event)}
      >
        <For each={props.data}>
          {(item) => (
            <option key={item} value={item}>
              {item}
            </option>
          )}
        </For>
      </select>
    </InputWrapper>
  );
}
