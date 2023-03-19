import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import { BaseComponentProps, Size } from './BaseComponentProps';

export interface ConfiguratorStageProps extends BaseComponentProps {
  size?: Size;
}

export default function ConfiguratorStage(props: ConfiguratorStageProps) {
  return (
    <div class={buildOpenLooksClassName('configurator-stage', props)} style={props.sx as JSX.CSS | undefined}>
      {props.children}
    </div>
  );
}
