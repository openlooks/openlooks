import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export default function AppShellMain(props: BaseComponentProps) {
  return (
    <main class={buildOpenLooksClassName('main scrollarea', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </main>
  );
}
