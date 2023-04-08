import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface BurgerProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  opened?: boolean;
  label?: string;
  onClick?: (e: any) => void;
}

export default function Burger(props: BurgerProps) {
  return (
    <button
      id={props.id}
      class={buildOpenLooksClassName('unstyled-button burger-button', props.c)}
      style={props.sx as JSX.CSS | undefined}
      aria-label={props.label}
      onClick={(event) => {
        props.onClick?.(event);
      }}
    >
      <div class="openlooks burger" data-open={props.opened}></div>
    </button>
  );
}
