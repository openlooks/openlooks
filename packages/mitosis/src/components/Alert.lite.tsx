import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface AlertProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  slotIcon?: any;
  title: string;
  children?: any;
}

export default function Alert(props: AlertProps) {
  return (
    <div
      id={props.id}
      class={buildOpenLooksClassName('alert', props.c, { variant: 'light', color: 'blue', radius: 'sm' })}
      style={props.sx as JSX.CSS | undefined}
    >
      <div class="alert-icon">{props.slotIcon}</div>
      <div class="alert-body">
        <div class="alert-title">{props.title}</div>
        {props.children}
      </div>
    </div>
  );
}
