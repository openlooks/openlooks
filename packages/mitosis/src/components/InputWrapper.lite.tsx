import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export interface InputWrapperProps extends BaseComponentProps {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
}

export default function InputWrapper(props: InputWrapperProps) {
  return (
    <div class={buildOpenLooksClassName('inputwrapper', props)} style={props.sx as JSX.CSS | undefined}>
      {props.label && (
        <label for={props.id} class="label">
          {props.label}
        </label>
      )}
      {props.description && <div class="description">{props.description}</div>}
      {props.children}
      {props.error && <div class="error">{props.error}</div>}
    </div>
  );
}
