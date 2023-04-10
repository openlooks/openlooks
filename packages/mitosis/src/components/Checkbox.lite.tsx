import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import InputWrapper from './InputWrapper.lite';

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
  return (
    <>
      <div id={props.id} class={buildOpenLooksClassName('checkbox', props.c)} style={props.sx as JSX.CSS | undefined}>
        <div>
          <input
            id={props.id}
            class={buildOpenLooksClassName('checkbox', props.c)}
            type="checkbox"
            value="on"
            checked={props.defaultChecked}
          />
        </div>
        <InputWrapper
          id={props.id}
          label={props.label}
          description={props.description}
          error={props.error}
          required={props.required}
        />
      </div>
    </>
  );
}
