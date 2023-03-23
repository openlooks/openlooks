import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { BaseComponentProps } from '../../components/BaseComponentProps';
import { buildOpenLooksClassName } from '../../utils/classname';

export interface PrismProps extends BaseComponentProps {
  language: string;
}

export default function Prism(props: PrismProps) {
  return (
    <pre class="openlooks">
      <code class={buildOpenLooksClassName('code', props)} style={props.sx as JSX.CSS | undefined}>
        {props.children}
      </code>
    </pre>
  );
}

// innerHTML={(window as any).Prism.highlight(
//   props.children,
//   (window as any).Prism.languages[props.language],
//   props.language
// )}