import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface ConfiguratorControlsProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function ConfiguratorControls(props: ConfiguratorControlsProps) {
  return (
    <div class={buildOpenLooksClassName('configurator-controls', props.c)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
