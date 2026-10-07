import { Input } from "./Input";
import { InputWrapper } from "./InputWrapper";
import type { BaseComponentProps } from "./BaseComponentProps";
import type { JSX } from "react";

export interface TextInputProps extends BaseComponentProps {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
  slotIcon?: JSX.Element;
  slotRightSection?: JSX.Element;
  onChange?: (e: any) => void;
}

export function TextInput(props: TextInputProps): JSX.Element {
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
        slotIcon={props.slotIcon}
        slotRightSection={props.slotRightSection}
        onChange={(event) => props.onChange?.(event)}
      />
    </InputWrapper>
  );
}
