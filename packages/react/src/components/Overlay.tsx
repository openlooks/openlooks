import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface OverlayProps extends BaseComponentProps {
  visible?: boolean;
  /** Determines whether overlay should have fixed position instead of absolute, false by default */
  fixed?: boolean;
}

export function Overlay(props: OverlayProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("overlay", props.c)}
      style={{
        position: props.fixed ? "fixed" : "absolute",
        opacity: props.visible ? "1" : "0",
        visibility: props.visible ? "visible" : "hidden",
      }}
    />
  );
}
