import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";
import { InputWrapper } from "./InputWrapper";

export interface NativeSelectProps extends BaseComponentProps {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  data: string[];
  defaultValue?: string;
  onChange?: (e: any) => void;
}

export function NativeSelect(props: NativeSelectProps): JSX.Element {
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
        className={buildOpenLooksClassName("nativeselect", props.c)}
        style={props.sx}
        value={props.defaultValue}
        onChange={(event) => props.onChange?.(event)}
      >
        <>
          {props.data.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </>
      </select>
    </InputWrapper>
  );
}
