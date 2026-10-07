import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import { BaseComponentProps } from "./BaseComponentProps";

export interface AlertProps extends BaseComponentProps {
  slotIcon?: any;
  title: string;
}

export function Alert(props: AlertProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("alert", props.c, {
        variant: "light",
        color: "blue",
        radius: "sm",
      })}
      style={props.sx}
    >
      <div className="alert-icon">{props.slotIcon}</div>
      <div className="alert-body">
        <div className="alert-title">{props.title}</div>
        {props.children}
      </div>
    </div>
  );
}
