import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface AppShellMainProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function AppShellMain(props: AppShellMainProps) {
  return (
    <main class={buildOpenLooksClassName('main scrollarea', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </main>
  );
}
