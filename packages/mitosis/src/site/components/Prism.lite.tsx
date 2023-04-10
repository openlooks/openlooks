import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../../utils/classname';
import './Prism.css';

export interface PrismProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  language: string;
  code: string;
}

export default function Prism(props: PrismProps) {
  return (
    <pre id={props.id} class={buildOpenLooksClassName(`language-${props.language}`, props.c)}>
      <code
        id={props.id}
        class={buildOpenLooksClassName(`language-${props.language}`, props.c)}
        style={props.sx as JSX.CSS | undefined}
        innerHTML={(window as any).Prism.highlight(
          props.code,
          (window as any).Prism.languages[props.language],
          props.language
        )}
      />
    </pre>
  );
}
