import { useStore } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import ActionIcon from './ActionIcon.lite';
import Input from './Input.lite';
import InputWrapper from './InputWrapper.lite';
import PasswordToggleIcon from './PasswordToggleIcon.lite';

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
  icon?: JSX.Element;
  onChange?: (e: any) => void;
}

export default function PasswordInput(props: PasswordInputProps) {
  const state = useStore({
    visible: false,
  });

  return (
    <InputWrapper
      id={props.id}
      label={props.label}
      description={props.description}
      error={props.error}
      required={props.required}
    >
      <Input
        id={props.id}
        c={props.c}
        sx={props.sx}
        type="text"
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        invalid={!!props.error}
        icon={props.icon}
        rightSection={
          <ActionIcon
            c="color-gray size-sm radius-sm variant-subtle"
            onClick={(event) => {
              event.preventDefault();
              state.visible = !state.visible;
            }}
          >
            <PasswordToggleIcon size="0.9375rem" reveal={state.visible} />
          </ActionIcon>
        }
        onChange={(event) => props.onChange?.(event)}
      />
    </InputWrapper>
  );
}
