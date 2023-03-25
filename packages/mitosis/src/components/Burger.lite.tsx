import { useStore } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export interface BurgerProps extends BaseComponentProps {
  opened?: boolean;
  onClick?: (e: any) => void;
}

export default function Burger(props: BurgerProps) {
  const state = useStore({
    open: !!props.opened,
  });
  return (
    <button
      id={props.id}
      class={buildOpenLooksClassName('unstyled-button burger-button', props)}
      style={props.sx as JSX.CSS | undefined}
      onClick={(event) => {
        state.open = !state.open;
        props.onClick?.(event);
      }}
    >
      <div class="openlooks burger" data-open={state.open}></div>
    </button>
  );
}
