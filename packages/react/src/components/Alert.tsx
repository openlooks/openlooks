import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface AlertProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  slotIcon?: any;
  title: string;
  children?: any;
}
export function Alert(props: AlertProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("alert", props.c, {
        variant: "light",
        color: "blue",
        radius: "sm",
      })}
      style={props.sx as React.CSSProperties | undefined}
    >
      <div className="alert-icon">{props.slotIcon}</div>
      <div className="alert-body">
        <div className="alert-title">{props.title}</div>
        {props.children}
      </div>
    </div>
  );
}
