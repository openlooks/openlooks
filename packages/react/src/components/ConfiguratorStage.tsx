import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface ConfiguratorStageProps extends BaseComponentProps {}

export function ConfiguratorStage(props: ConfiguratorStageProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("configurator-stage", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
