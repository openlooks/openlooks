import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface LoaderProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
}

export default function Loader(props: LoaderProps) {
  return (
    <svg
      id={props.id}
      viewBox="0 0 38 38"
      class={buildOpenLooksClassName('loader', props.c, { color: 'blue', size: 'md' })}
      style={props.sx as JSX.CSS | undefined}
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(2.5 2.5)" stroke-width="5">
          <circle stroke-opacity=".5" cx="16" cy="16" r="16" />
          <path d="M32 16c0-9.94-8.06-16-16-16">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 16 16"
              to="360 16 16"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
}
