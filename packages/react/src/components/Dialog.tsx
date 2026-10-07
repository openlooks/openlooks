import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import { Affix } from "./Affix";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface DialogProps extends BaseComponentProps {}

export function Dialog(props: DialogProps): JSX.Element {
  return (
    <Affix>
      <div
        id={props.id}
        className={buildOpenLooksClassName("popover paper", props.c, {
          shadow: "xl",
          radius: "sm",
          withBorder: true,
        })}
        style={props.sx}
      >
        {props.children}
      </div>
    </Affix>
  );
}
