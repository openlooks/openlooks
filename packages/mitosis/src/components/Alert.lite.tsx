import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export interface AlertProps extends BaseComponentProps {
  icon?: any;
  title: string;
  variant?: 'filled' | 'light' | 'outline';
}

export default function Alert(props: AlertProps) {
  return (
    <div
      class={buildOpenLooksClassName('alert', props, { variant: 'light', color: 'blue', radius: 'sm' })}
      style={props.sx as JSX.CSS | undefined}
    >
      <div class="alert-icon">{props.icon}</div>
      <div class="alert-body">
        <div class="alert-title">{props.title}</div>
        {props.children}
      </div>
    </div>
  );
}
