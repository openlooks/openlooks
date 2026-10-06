import React from "react";
import ActionIcon from "./ActionIcon";
import Input from "./Input";
import InputWrapper from "./InputWrapper";
import PasswordToggleIcon from "./PasswordToggleIcon";
export interface PasswordInputProps {
    id: string;
    c?: string;
    sx?: Record<string, any>;
    label?: string;
    description?: string;
    error?: string;
    required?: boolean;
    defaultValue?: string;
    placeholder?: string;
    slotIcon?: JSX.Element;
    onChange?: (e: any) => void;
}
export default function PasswordInput(props: PasswordInputProps) {
    const [visible, setVisible] = React.useState(false);
    return (<InputWrapper id={props.id} label={props.label} description={props.description} error={props.error} required={props.required}>
      <Input id={props.id} c={props.c} sx={props.sx} type={visible ? 'text' : 'password'} defaultValue={props.defaultValue} placeholder={props.placeholder} invalid={!!props.error} slotIcon={props.slotIcon} slotRightSection={<ActionIcon c="color-gray size-sm radius-sm variant-subtle" onClick={(event) => {
                event.preventDefault();
                setVisible(!visible);
            }}>
            <PasswordToggleIcon size="0.9375rem" reveal={visible}/>
          </ActionIcon>} onChange={(event) => props.onChange?.(event)}/>
    </InputWrapper>);
}
