import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import ActionIcon from './ActionIcon.lite';
import InputWrapper from './InputWrapper.lite';
import PasswordToggleIcon from './PasswordToggleIcon.lite';
import { useStore } from '@builder.io/mitosis';

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
      <div style={{ position: 'relative' }}>
        <input
          type={state.visible ? 'text' : 'password'}
          id={props.id}
          class={buildOpenLooksClassName('textinput', props.c)}
          style={props.sx as JSX.CSS | undefined}
          value={props.defaultValue || ''}
          placeholder={props.placeholder}
          aria-invalid={!!props.error}
          onChange={(event) => props.onChange?.(event)}
          onInput={(event) => props.onChange?.(event)}
        />
        <div class="rightSection">
          <ActionIcon
            c="color-gray size-sm radius-sm variant-subtle"
            onClick={(event) => {
              event.preventDefault();
              state.visible = !state.visible;
            }}
          >
            <PasswordToggleIcon size="0.9375rem" reveal={state.visible} />
          </ActionIcon>
        </div>
      </div>
    </InputWrapper>
  );
}
