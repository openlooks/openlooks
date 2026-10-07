import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import { BaseComponentProps } from "./BaseComponentProps";

export interface AffixProps extends BaseComponentProps {}

export function Affix(props: AffixProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("affix", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
