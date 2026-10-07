import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface ConfiguratorProps extends BaseComponentProps {}

export function Configurator(props: ConfiguratorProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("configurator", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
