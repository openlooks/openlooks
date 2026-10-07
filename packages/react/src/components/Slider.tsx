import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";
import { InputWrapper } from "./InputWrapper";

export interface SliderMark {
  value: number;
  label: string;
}

export interface SliderProps extends BaseComponentProps {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  marks?: SliderMark[];
  defaultValue?: string;
  onChange?: (e: any) => void;
}

export function Slider(props: SliderProps): JSX.Element {
  return (
    <InputWrapper
      id={props.id}
      label={props.label}
      description={props.description}
      error={props.error}
      required={props.required}
    >
      <input
        type="range"
        id={props.id}
        list={props.id + "-marks"}
        className={buildOpenLooksClassName("slider", props.c)}
        style={props.sx}
        min={props.min}
        max={props.max}
        step={props.step}
        defaultValue={props.defaultValue}
        onChange={(event) => props.onChange?.(event)}
        onInput={(event) => props.onChange?.(event)}
      />
      <>
        {props.marks && (
          <datalist id={props.id + "-marks"} className="openlooks">
            <>
              {props.marks.map((mark) => (
                <option
                  key={mark.label}
                  value={mark.value}
                  label={mark.label}
                ></option>
              ))}
            </>
          </datalist>
        )}
      </>
    </InputWrapper>
  );
}
