import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';

export interface ConfiguratorStageProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}

export default function ConfiguratorStage(props: ConfiguratorStageProps) {
  return (
    <div
      id={props.id}
      class={buildOpenLooksClassName('configurator-stage', props.c)}
      style={props.sx as JSX.CSS | undefined}
    >
      {props.children}
    </div>
  );
}
