import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface ImageProps extends BaseComponentProps {
  src: string;
  alt: string;
}

export function Image(props: ImageProps): JSX.Element {
  return (
    <img
      id={props.id}
      className={buildOpenLooksClassName("image", props.c)}
      style={props.sx}
      src={props.src}
      alt={props.alt}
    />
  );
}
