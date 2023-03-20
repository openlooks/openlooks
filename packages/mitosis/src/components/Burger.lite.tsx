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
    opened: !!props.opened,
  });
  return (
    <button
      class={buildOpenLooksClassName('unstyled-button burger-button', props)}
      style={props.sx as JSX.CSS | undefined}
      onClick={(event) => {
        state.opened = !state.opened;
        props.onClick?.(event);
      }}
    >
      <div class="openlooks burger" data-opened={state.opened}></div>
    </button>
  );
}
