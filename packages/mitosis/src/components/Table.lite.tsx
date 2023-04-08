import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface TableProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Table(props: TableProps) {
  return (
    <table class={buildOpenLooksClassName('table', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </table>
  );
}
