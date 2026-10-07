import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface CardSectionProps extends BaseComponentProps {}

export function CardSection(props: CardSectionProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("card-section", props.c)}
      style={props.sx}
    >
      {props.children}
    </div>
  );
}
