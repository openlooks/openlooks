import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface CardSectionProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  children?: any;
}
export function CardSection(props: CardSectionProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("card-section", props.c)}
      style={props.sx as React.CSSProperties | undefined}
    >
      {props.children}
    </div>
  );
}
