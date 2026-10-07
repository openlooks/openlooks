import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface CodeProps extends BaseComponentProps {
  block?: boolean;
}

export function Code(props: CodeProps): JSX.Element {
  return (
    <>
      <>
        {props.block && (
          <pre
            id={props.id}
            className={buildOpenLooksClassName("code", props.c, {
              color: "gray",
            })}
            style={props.sx}
          >
            <code
              id={props.id}
              className={buildOpenLooksClassName("code", props.c, {
                color: "gray",
              })}
              style={props.sx}
            >
              {props.children}
            </code>
          </pre>
        )}
      </>
      <>
        {!props.block && (
          <code
            id={props.id}
            className={buildOpenLooksClassName("code", props.c, {
              color: "gray",
            })}
            style={props.sx}
          >
            {props.children}
          </code>
        )}
      </>
    </>
  );
}
