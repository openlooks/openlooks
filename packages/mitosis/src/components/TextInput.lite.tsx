import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import InputWrapper from './InputWrapper.lite';

export interface TextInputProps {
  id: string;
  c?: string;
  sx?: Record<string, any>;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
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
      <input
        type="text"
        id={props.id}
        class={buildOpenLooksClassName('textinput', props.c)}
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
