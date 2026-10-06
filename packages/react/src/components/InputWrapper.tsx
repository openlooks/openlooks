import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
export interface InputWrapperProps {
    id: string;
    c?: string;
    sx?: Record<string, any>;
    label?: string;
    description?: string;
    error?: string;
    required?: boolean;
    children?: any;
}
export default function InputWrapper(props: InputWrapperProps) {
    return (<div className={buildOpenLooksClassName('inputwrapper', props.c)} style={props.sx as React.CSSProperties | undefined}>
      <>{props.label && <label htmlFor={props.id} className="label">
          {props.label}
          <>{props.required && <span className="required">{` *`}</span>}</>
        </label>}</>
      <>{props.description && <div className="description">{props.description}</div>}</>
      {props.children}
      <>{props.error && <div className="error">{props.error}</div>}</>
    </div>);
}
