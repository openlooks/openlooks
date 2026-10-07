import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";
import { InputWrapper } from "./InputWrapper";

export interface ColorPickerProps extends BaseComponentProps {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  name: string;
  defaultValue?: string;
  onChange?: (e: any) => void;
}

export function ColorPicker(props: ColorPickerProps): JSX.Element {
  return (
    <InputWrapper
      id={props.id}
      label={props.label}
      description={props.description}
      error={props.error}
      required={props.required}
    >
      <div
        id={props.id}
        className={buildOpenLooksClassName("colorpicker", props.c)}
        style={props.sx}
      >
        <>
          {[
            "black",
            "gray",
            "red",
            "pink",
            "grape",
            "violet",
            "indigo",
            "blue",
            "cyan",
            "teal",
            "green",
            "lime",
            "yellow",
            "orange",
          ].map((color) => (
            <div key={color}>
              <input
                type="radio"
                id={`${props.id}-${color}`}
                name={props.name}
                defaultValue={color}
                checked={color === props.defaultValue}
                onChange={(event) => {
                  if (props.onChange) {
                    props.onChange(event);
                  }
                }}
              />
              <label
                htmlFor={`${props.id}-${color}`}
                style={{
                  background:
                    color === "black" ? "black" : `var(--oc-${color}-6)`,
                }}
                title={color}
              >
                ✓
              </label>
            </div>
          ))}
        </>
      </div>
    </InputWrapper>
  );
}
