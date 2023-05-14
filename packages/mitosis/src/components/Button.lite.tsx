import { Show } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import Loader from './Loader.lite';

export interface ButtonProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  slotIcon?: JSX.Element;
  loading?: boolean;
  onClick?: (e: any) => void;
  children?: any;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      id={props.id}
      class={buildOpenLooksClassName('button', props.c, { variant: 'filled', color: 'blue', size: 'sm', radius: 'sm' })}
      style={props.sx as JSX.CSS | undefined}
      onClick={(event) => props.onClick?.(event)}
      data-loading={props.loading}
      disabled={props.loading}
    >
      <Show when={props.slotIcon && !props.loading}>
        <div class={buildOpenLooksClassName('icon', undefined, { variant: 'none' })}>{props.slotIcon}</div>
      </Show>
      <Show when={props.loading}>
        <div class={buildOpenLooksClassName('icon', undefined, { variant: 'none' })}>
          <Loader c="color-white variant-none" />
        </div>
      </Show>
      {props.children}
    </button>
  );
}
