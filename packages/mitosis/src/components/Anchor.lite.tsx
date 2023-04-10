import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface AnchorProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
  href: string;
  target?: string;
  label?: string;
  onClick?: (event: MouseEvent) => void;
}

export default function Anchor(props: AnchorProps) {
  return (
    <a
      id={props.id}
      class={buildOpenLooksClassName('anchor text', props.c)}
      style={props.sx as JSX.CSS | undefined}
      href={props.href}
      target={props.target}
      aria-label={props.label}
      onClick={(event) => props.onClick?.(event)}
    >
      {props.children}
    </a>
  );
}
