import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { TextProps } from './Text.lite';

export interface AnchorProps extends TextProps {
  href: string;
}

export default function Anchor(props: AnchorProps) {
  return (
    <a class={buildOpenLooksClassName('anchor text', props)} style={props.sx as JSX.CSS | undefined} href={props.href}>
      {props.children}
    </a>
  );
}
