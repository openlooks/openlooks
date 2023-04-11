import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface AppShellBodyProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function AppShellBody(props: AppShellBodyProps) {
  return (
    <div id={props.id} class={buildOpenLooksClassName('body', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
