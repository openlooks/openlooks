import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps } from './BaseComponentProps';

export default function Table(props: BaseComponentProps) {
  return (
    <table class={buildOpenLooksClassName('table', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </table>
  );
}
