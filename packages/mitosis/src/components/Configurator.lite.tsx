import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface ConfiguratorProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function Configurator(props: ConfiguratorProps) {
  return (
    <div class={buildOpenLooksClassName('configurator', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
