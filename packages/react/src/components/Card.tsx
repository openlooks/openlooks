import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface CardProps extends BaseComponentProps {}

export function Card(props: CardProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("card paper", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
