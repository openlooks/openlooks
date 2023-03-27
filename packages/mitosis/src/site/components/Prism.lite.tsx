import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { BaseComponentProps } from '../../components/BaseComponentProps';
import { buildOpenLooksClassName } from '../../utils/classname';
import './Prism.css';

export interface PrismProps extends BaseComponentProps {
  language: string;
}

export default function Prism(props: PrismProps) {
  return (
    <pre class={buildOpenLooksClassName(`code language-${props.language}`, props)}>
      <code
        class={buildOpenLooksClassName(`code language-${props.language}`, props)}
        style={props.sx as JSX.CSS | undefined}
        innerHTML={(window as any).Prism.highlight(
          props.children,
          (window as any).Prism.languages[props.language],
          props.language
        )}
      />
    </pre>
  );
}
