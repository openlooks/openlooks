import { buildOpenLooksClassName } from '../utils/classname';

export interface OverlayProps {
  id?: string;
  c?: string;
  visible?: boolean;

  /** Determines whether overlay should have fixed position instead of absolute, false by default */
  fixed?: boolean;
}

export default function Overlay(props: OverlayProps) {
  return (
    <div
      id={props.id}
      class={buildOpenLooksClassName('overlay', props.c)}
      style={{
        position: props.fixed ? 'fixed' : 'absolute',
        opacity: props.visible ? '1' : '0',
        visibility: props.visible ? 'visible' : 'hidden',
      }}
    />
  );
}
