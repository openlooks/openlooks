import { buildOpenLooksClassName } from '../utils/classname';

export interface OverlayProps {
  id?: string;
  c?: string;
  visible?: boolean;
}

export default function Overlay(props: OverlayProps) {
  return (
    <div
      id={props.id}
      class={buildOpenLooksClassName('overlay', props.c)}
      style={{
        opacity: props.visible ? '1' : '0',
        visibility: props.visible ? 'visible' : 'hidden',
      }}
    />
  );
}
