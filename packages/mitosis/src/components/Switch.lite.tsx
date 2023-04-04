import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';
import { InputWrapperProps } from './InputWrapper.lite';

export interface SwitchProps extends BaseComponentProps, InputWrapperProps {
  id: string;
  size?: Size;
}

export default function Switch(props: SwitchProps) {
  return (
    <>
      <div class={buildOpenLooksClassName('switch', props)} style={props.sx as JSX.CSS | undefined}>
        <div>
          <label class="track">
            <input type="checkbox" />
            <span class={buildOpenLooksClassName('slider', props)}>
              <span class={buildOpenLooksClassName('thumb', props)} />
            </span>
          </label>
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
