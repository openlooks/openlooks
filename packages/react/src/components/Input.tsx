import type { JSX } from "react";
import type { BaseComponentProps } from "./BaseComponentProps";
import { buildOpenLooksClassName } from "../utils/classname";

export interface InputProps extends BaseComponentProps {
  type: string;
  defaultValue?: string;
  placeholder?: string;
  invalid?: boolean;
  slotIcon?: JSX.Element;
  slotRightSection?: JSX.Element;
  onChange?: (e: any) => void;
}

export function Input(props: InputProps): JSX.Element {
  return (
    <div style={{ position: "relative" }}>
      <>
        {props.slotIcon && <div className="leftSection">{props.slotIcon}</div>}
      </>
      <input
        id={props.id}
        className={buildOpenLooksClassName("textinput", props.c)}
        style={props.sx}
        type={props.type}
        defaultValue={props.defaultValue || ""}
        placeholder={props.placeholder}
        aria-invalid={props.invalid}
        onChange={(event) => props.onChange?.(event)}
        onInput={(event) => props.onChange?.(event)}
      />
      <>
        {props.slotRightSection && (
          <div className="rightSection">{props.slotRightSection}</div>
        )}
      </>
    </div>
  );
}
