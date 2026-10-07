import { CSSProperties, JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import { Loader } from "./Loader";
export interface ButtonProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  slotIcon?: JSX.Element;
  loading?: boolean;
  onClick?: (e: any) => void;
  children?: any;
}
export function Button(props: ButtonProps) {
  return (
    <button
      id={props.id}
      className={buildOpenLooksClassName("button", props.c, {
        variant: "filled",
        color: "blue",
        size: "sm",
        radius: "sm",
      })}
      style={props.sx as CSSProperties | undefined}
      onClick={(event) => props.onClick?.(event)}
      data-loading={props.loading}
      disabled={props.loading}
    >
      <>
        {props.slotIcon && !props.loading && (
          <div
            className={buildOpenLooksClassName("icon", undefined, {
              variant: "none",
            })}
          >
            {props.slotIcon}
          </div>
        )}
      </>
      <>
        {props.loading && (
          <div
            className={buildOpenLooksClassName("icon", undefined, {
              variant: "none",
            })}
          >
            <Loader c="color-white variant-none" />
          </div>
        )}
      </>
      {props.children}
    </button>
  );
}
