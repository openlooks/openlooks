import { JSX } from '@builder.io/mitosis/jsx-runtime';
import Input from './Input.lite';
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
  icon?: JSX.Element;
  rightSection?: JSX.Element;
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
      <Input
        id={props.id}
        c={props.c}
        sx={props.sx}
        type="text"
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        invalid={!!props.error}
        icon={props.icon}
        rightSection={props.rightSection}
        onChange={(event) => props.onChange?.(event)}
      />
    </InputWrapper>
  );
}
