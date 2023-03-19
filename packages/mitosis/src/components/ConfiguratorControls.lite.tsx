import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface ConfiguratorControlsProps extends BaseComponentProps {
  size?: Size;
}

export default function ConfiguratorControls(props: ConfiguratorControlsProps) {
  return (
    <div class={buildOpenLooksClassName('configurator-controls', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
