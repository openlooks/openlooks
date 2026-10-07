import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface ConfiguratorControlsProps extends BaseComponentProps {}

export function ConfiguratorControls(
  props: ConfiguratorControlsProps,
): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("configurator-controls", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
