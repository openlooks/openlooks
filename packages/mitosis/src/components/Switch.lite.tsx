import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface SwitchProps {
  id: string;
  c?: string;
  sx?: Record<string, any>;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
}

export default function Switch(props: SwitchProps) {
  return (
    <>
      <div class={buildOpenLooksClassName('switch', props.c)} style={props.sx as JSX.CSS | undefined}>
        <div>
          <label class="track">
            <input type="checkbox" />
            <span class={buildOpenLooksClassName('slider', props.c)}>
              <span class={buildOpenLooksClassName('thumb', props.c)} />
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
