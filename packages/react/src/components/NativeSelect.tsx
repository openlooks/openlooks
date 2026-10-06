import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
import InputWrapper from "./InputWrapper";
export interface NativeSelectProps {
    id: string;
    c?: string;
    sx?: Record<string, any>;
    label?: string;
    description?: string;
    error?: string;
    required?: boolean;
    data: string[];
    defaultValue?: string;
    onChange?: (e: any) => void;
}
export default function NativeSelect(props: NativeSelectProps) {
    return (<InputWrapper id={props.id} label={props.label} description={props.description} error={props.error} required={props.required}>
      <select id={props.id} className={buildOpenLooksClassName('nativeselect', props.c)} style={props.sx as React.CSSProperties | undefined} value={props.defaultValue} onChange={(event) => props.onChange?.(event)}>
        <>{props.data.map((item) => (<option key={item} value={item}>
              {item}
            </option>))}</>
      </select>
    </InputWrapper>);
}
