import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface DrawerProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Drawer(props: DrawerProps) {
  return (
    <>
      <div class={buildOpenLooksClassName('overlay', props.c)} style={props.sx as JSX.CSS | undefined} />
      <div
        id={props.id}
        class={buildOpenLooksClassName('drawer paper', props.c)}
        style={props.sx as JSX.CSS | undefined}
      >
        {props.children}
      </div>
    </>
  );
}
