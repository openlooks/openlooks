import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface AppShellProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function AppShell(props: AppShellProps) {
  return (
    <div class={buildOpenLooksClassName('appshell', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
