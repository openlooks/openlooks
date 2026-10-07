import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";
import { InputWrapper } from "./InputWrapper";

export interface SwitchProps extends BaseComponentProps {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  onChange?: (event: any) => void;
}

export function Switch(props: SwitchProps): JSX.Element {
  return (
    <>
      <div
        className={buildOpenLooksClassName("switch", props.c, {
          radius: "xl",
          size: "sm",
        })}
        style={props.sx}
      >
        <div>
          <label className="track">
            <input
              id={props.id}
              type="checkbox"
              onChange={(event) => props.onChange?.(event)}
            />
            <span
              className={buildOpenLooksClassName("slider", props.c, {
                radius: "xl",
                size: "sm",
              })}
            >
              <span
                className={buildOpenLooksClassName("thumb", props.c, {
                  radius: "xl",
                  size: "sm",
                })}
              />
            </span>
          </label>
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
