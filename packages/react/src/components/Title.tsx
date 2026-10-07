import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface TitleProps extends BaseComponentProps {
  order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Title(props: TitleProps): JSX.Element {
  return (
    <>
      <>
        {(props.order === 1 || props.order === undefined) && (
          <h1
            id={props.id}
            className={buildOpenLooksClassName("title", props.c)}
            style={props.sx}
          >
            {props.children}
          </h1>
        )}
      </>
      <>
        {props.order === 2 && (
          <h2
            id={props.id}
            className={buildOpenLooksClassName("title", props.c)}
            style={props.sx}
          >
            {props.children}
          </h2>
        )}
      </>
      <>
        {props.order === 3 && (
          <h3
            id={props.id}
            className={buildOpenLooksClassName("title", props.c)}
            style={props.sx}
          >
            {props.children}
          </h3>
        )}
      </>
      <>
        {props.order === 4 && (
          <h4
            id={props.id}
            className={buildOpenLooksClassName("title", props.c)}
            style={props.sx}
          >
            {props.children}
          </h4>
        )}
      </>
      <>
        {props.order === 5 && (
          <h5
            id={props.id}
            className={buildOpenLooksClassName("title", props.c)}
            style={props.sx}
          >
            {props.children}
          </h5>
        )}
      </>
      <>
        {props.order === 6 && (
          <h6
            id={props.id}
            className={buildOpenLooksClassName("title", props.c)}
            style={props.sx}
          >
            {props.children}
          </h6>
        )}
      </>
    </>
  );
}
