import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";
import { InputWrapper } from "./InputWrapper";

export interface TextareaProps extends BaseComponentProps {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}

export function Textarea(props: TextareaProps): JSX.Element {
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
        className={buildOpenLooksClassName("textarea", props.c)}
        style={props.sx}
        value={props.defaultValue || ""}
        placeholder={props.placeholder}
        aria-invalid={!!props.error}
        onChange={(event) => props.onChange?.(event)}
        onInput={(event) => props.onChange?.(event)}
      />
    </InputWrapper>
  );
}
