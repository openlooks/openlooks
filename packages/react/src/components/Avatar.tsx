import type { JSX } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";

export interface AvatarProps extends BaseComponentProps {
  src?: string;
  alt?: string;
}

export function Avatar(props: AvatarProps): JSX.Element {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("avatar", props.c, { color: "gray" })}
      style={props.sx}
    >
      <div className="openlooks center">
        <>
          {props.src && (
            <img src={props.src} alt={props.alt} title={props.alt} />
          )}
        </>
        {props.children}
      </div>
    </div>
  );
}
