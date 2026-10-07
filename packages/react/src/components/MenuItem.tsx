import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface MenuItemProps extends BaseComponentProps {
  slotIcon?: JSX.Element;
  onClick?: (e: any) => void;
  onMouseOver?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  children?: any;
}

export function MenuItem(props: MenuItemProps): JSX.Element {
  return (
    <button
      id={props.id}
      className={buildOpenLooksClassName("menu-item", props.c)}
      style={props.sx}
      onClick={(event) => props.onClick?.(event)}
      onMouseOver={(event) => props.onMouseOver?.(event)}
      onMouseLeave={(event) => props.onMouseLeave?.(event)}
    >
      <>{props.slotIcon && <div className="icon">{props.slotIcon}</div>}</>
      <div className="label">{props.children}</div>
    </button>
  );
}
