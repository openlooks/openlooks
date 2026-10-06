import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
import InputWrapper from "./InputWrapper";
export interface TextareaProps {
    id: string;
    c?: string;
    sx?: Record<string, any>;
    label?: string;
    description?: string;
    error?: string;
    required?: boolean;
    defaultValue?: string;
    placeholder?: string;
    onChange?: (e: any) => void;
}
export default function Textarea(props: TextareaProps) {
    return (<InputWrapper id={props.id} label={props.label} description={props.description} error={props.error} required={props.required}>
      <textarea id={props.id} className={buildOpenLooksClassName('textarea', props.c)} style={props.sx as React.CSSProperties | undefined} value={props.defaultValue || ''} placeholder={props.placeholder} aria-invalid={!!props.error} onChange={(event) => props.onChange?.(event)} onInput={(event) => props.onChange?.(event)}/>
    </InputWrapper>);
}
