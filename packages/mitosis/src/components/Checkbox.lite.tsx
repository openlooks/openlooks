import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';
import { InputWrapperProps } from './InputWrapper.lite';

export interface CheckboxProps extends BaseComponentProps, InputWrapperProps {
  id: string;
  size?: Size;
  defaultChecked?: boolean;
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <>
      <div class={buildOpenLooksClassName('checkbox', props)} style={props.sx as JSX.CSS | undefined}>
        <div>
          <input
            class={buildOpenLooksClassName('checkbox', props)}
            type="checkbox"
            value="on"
            checked={props.defaultChecked}
          />
        </div>
        <div class="openlooks inputwrapper">
          <label for={props.id}>{props.label}</label>
          {props.description && <div class="description">{props.description}</div>}
          {props.error && <div class="error">{props.error}</div>}
        </div>
      </div>
    </>
  );
}
