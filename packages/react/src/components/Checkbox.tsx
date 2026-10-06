import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
import InputWrapper from "./InputWrapper";
export interface CheckboxProps {
    id: string;
    c?: string;
    sx?: Record<string, any>;
    label?: string;
    description?: string;
    error?: string;
    required?: boolean;
    defaultChecked?: boolean;
}
export default function Checkbox(props: CheckboxProps) {
    return (<>
      <div className={buildOpenLooksClassName('checkbox', props.c)} style={props.sx as React.CSSProperties | undefined}>
        <div>
          <input id={props.id} className={buildOpenLooksClassName('checkbox', props.c, { radius: 'sm' })} type="checkbox" defaultValue="on" checked={props.defaultChecked}/>
        </div>
        <InputWrapper id={props.id} label={props.label} description={props.description} error={props.error} required={props.required}/>
      </div>
    </>);
}
