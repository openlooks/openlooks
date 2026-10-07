import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface InputWrapperProps extends BaseComponentProps {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
}

export function InputWrapper(props: InputWrapperProps): JSX.Element {
  return (
    <div
      className={buildOpenLooksClassName("inputwrapper", props.c)}
      style={props.sx}
    >
      <>
        {props.label && (
          <label htmlFor={props.id} className="label">
            {props.label}
            <>{props.required && <span className="required">{` *`}</span>}</>
          </label>
        )}
      </>
      <>
        {props.description && (
          <div className="description">{props.description}</div>
        )}
      </>
      {props.children}
      <>{props.error && <div className="error">{props.error}</div>}</>
    </div>
  );
}
