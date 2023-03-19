import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';
import InputWrapper, { InputWrapperProps } from './InputWrapper.lite';

export interface TextInputProps extends BaseComponentProps, InputWrapperProps {
  variant?: 'filled' | 'light' | 'outline' | 'subtle';
  size?: Size;
  defaultValue?: string;
  onChange?: (e: any) => void;
}

export default function TextInput(props: TextInputProps) {
  return (
    <InputWrapper
      id={props.id}
      label={props.label}
      description={props.description}
      error={props.error}
      required={props.required}
    >
      <input
        type="text"
        id={props.id}
        class={buildOpenLooksClassName('textinput', props)}
        style={props.sx as JSX.CSS | undefined}
        value={props.defaultValue}
        onChange={(event) => props.onChange?.(event)}
      />
    </InputWrapper>
  );
}