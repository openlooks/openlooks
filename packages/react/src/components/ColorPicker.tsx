import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
import InputWrapper from "./InputWrapper";
export interface ColorPickerProps {
    id: string;
    c?: string;
    sx?: Record<string, any>;
    label?: string;
    description?: string;
    error?: string;
    required?: boolean;
    name: string;
    defaultValue?: string;
    onChange?: (e: any) => void;
}
export default function ColorPicker(props: ColorPickerProps) {
    return (<InputWrapper id={props.id} label={props.label} description={props.description} error={props.error} required={props.required}>
      <div id={props.id} className={buildOpenLooksClassName('colorpicker', props.c)} style={props.sx as React.CSSProperties | undefined}>
        <>{[
        'black',
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange',
    ].map((color) => (<div>
              <input type="radio" id={`${props.id}-${color}`} name={props.name} defaultValue={color} checked={color === props.defaultValue} onChange={(event) => {
            if (props.onChange) {
                props.onChange(event);
            }
        }}/>
              <label htmlFor={`${props.id}-${color}`} style={{ background: color === 'black' ? 'black' : `var(--oc-${color}-6)` }} title={color}>
                ✓
              </label>
            </div>))}</>
      </div>
    </InputWrapper>);
}
