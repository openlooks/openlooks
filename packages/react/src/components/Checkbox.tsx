import type { ChangeEvent, JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";
import { InputWrapper } from "./InputWrapper";

export interface CheckboxProps extends BaseComponentProps {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox(props: CheckboxProps): JSX.Element {
  return (
    <>
      <div
        className={buildOpenLooksClassName("checkbox", props.c)}
        style={props.sx}
      >
        <div>
          <input
            id={props.id}
            className={buildOpenLooksClassName("checkbox", props.c, {
              radius: "sm",
            })}
            type="checkbox"
            defaultValue="on"
            defaultChecked={props.defaultChecked}
            onChange={props.onChange}
          />
        </div>
        <InputWrapper
          id={props.id}
          label={props.label}
          description={props.description}
          error={props.error}
          required={props.required}
        />
      </div>
    </>
  );
}
