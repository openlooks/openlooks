import type { JSX } from "react";
import type { BaseComponentProps } from "./BaseComponentProps";
import { buildOpenLooksClassName } from "../utils/classname";
import { Loader } from "./Loader";

export interface ButtonProps extends BaseComponentProps {
  slotIcon?: JSX.Element;
  loading?: boolean;
}

export function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      id={props.id}
      className={buildOpenLooksClassName("button", props.c, {
        variant: "filled",
        color: "blue",
        size: "sm",
        radius: "sm",
      })}
      style={props.sx}
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
