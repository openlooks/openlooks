import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface InputWrapperProps {
  id: string;
  c?: string;
  sx?: Record<string, any>;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  children?: any;
}

export default function InputWrapper(props: InputWrapperProps) {
  return (
    <div class={buildOpenLooksClassName('inputwrapper', props.c)} style={props.sx as JSX.CSS | undefined}>
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
