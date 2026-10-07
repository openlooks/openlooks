import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";

import type { BaseComponentProps } from "./BaseComponentProps";

export interface LoaderProps extends BaseComponentProps {}

export function Loader(props: LoaderProps): JSX.Element {
  return (
    <svg
      id={props.id}
      viewBox="0 0 38 38"
      className={buildOpenLooksClassName("loader", props.c, {
        color: "blue",
        size: "md",
      })}
      style={props.sx}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2.5 2.5)" strokeWidth={5}>
          <circle strokeOpacity=".5" cx="16" cy="16" r="16" />
          <path d="M32 16c0-9.94-8.06-16-16-16">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 16 16"
              to="360 16 16"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
}
