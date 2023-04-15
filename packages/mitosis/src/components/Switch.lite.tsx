import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import InputWrapper from './InputWrapper.lite';

export interface SwitchProps {
  id: string;
  c?: string;
  sx?: Record<string, any>;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  onChange?: (event: any) => void;
}

export default function Switch(props: SwitchProps) {
  return (
    <>
      <div
        id={props.id}
        class={buildOpenLooksClassName('switch', props.c, { radius: 'xl', size: 'sm' })}
        style={props.sx as JSX.CSS | undefined}
      >
        <div>
          <label class="track">
            <input type="checkbox" onChange={(event) => props.onChange?.(event)} />
            <span id={props.id} class={buildOpenLooksClassName('slider', props.c)}>
              <span id={props.id} class={buildOpenLooksClassName('thumb', props.c)} />
            </span>
          </label>
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
