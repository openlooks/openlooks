import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import { InputWrapper } from "./InputWrapper";
export interface SliderMark {
  value: number;
  label: string;
}
export interface SliderProps {
  id: string;
  c?: string;
  sx?: Record<string, any>;
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
export function Slider(props: SliderProps) {
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
        style={props.sx as React.CSSProperties | undefined}
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
