import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface ConfiguratorProps extends BaseComponentProps {
  size?: Size;
}

export default function Configurator(props: ConfiguratorProps) {
  return (
    <div class={buildOpenLooksClassName('configurator', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
