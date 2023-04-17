import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface ImageProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  src: string;
  alt: string;
}

export default function Image(props: ImageProps) {
  return (
    <img
      id={props.id}
      class={buildOpenLooksClassName('image', props.c)}
      style={props.sx as JSX.CSS | undefined}
      src={props.src}
      alt={props.alt}
    />
  );
}
