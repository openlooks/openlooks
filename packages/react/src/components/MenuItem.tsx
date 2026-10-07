import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
export interface MenuItemProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  slotIcon?: JSX.Element;
  onClick?: (e: any) => void;
  onMouseOver?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  children?: any;
}
export function MenuItem(props: MenuItemProps) {
  return (
    <button
      id={props.id}
      className={buildOpenLooksClassName("menu-item", props.c)}
      style={props.sx as React.CSSProperties | undefined}
      onClick={(event) => props.onClick?.(event)}
      onMouseOver={(event) => props.onMouseOver?.(event)}
      onMouseLeave={(event) => props.onMouseLeave?.(event)}
    >
      <>{props.slotIcon && <div className="icon">{props.slotIcon}</div>}</>
      <div className="label">{props.children}</div>
    </button>
  );
}
