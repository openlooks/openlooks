import { For } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';
import InputWrapper, { InputWrapperProps } from './InputWrapper.lite';

export interface NativeSelectProps extends BaseComponentProps, InputWrapperProps {
  id: string;
  variant?: 'filled' | 'light' | 'outline' | 'subtle';
  size?: Size;
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
        class={buildOpenLooksClassName('nativeselect', props)}
        style={props.sx as JSX.CSS | undefined}
        value={props.defaultValue}
        onChange={(event) => props.onChange?.(event)}
      >
        <For each={props.data}>{(item) => <option value={item}>{item}</option>}</For>
      </select>
    </InputWrapper>
  );
}
