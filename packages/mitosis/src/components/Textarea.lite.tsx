import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';
import InputWrapper, { InputWrapperProps } from './InputWrapper.lite';

export interface TextInputProps extends BaseComponentProps, InputWrapperProps {
  id: string;
  variant?: 'default' | 'filled' | 'unstyled';
  size?: Size;
  defaultValue?: string;
  placeholder?: string;
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
      <textarea
        id={props.id}
        class={buildOpenLooksClassName('textarea', props)}
        style={props.sx as JSX.CSS | undefined}
        value={props.defaultValue || ''}
        placeholder={props.placeholder}
        aria-invalid={!!props.error}
        onChange={(event) => props.onChange?.(event)}
        onInput={(event) => props.onChange?.(event)}
      />
    </InputWrapper>
  );
}