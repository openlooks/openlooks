import type { JSX } from "react";
import { useContext } from "react";
import { RouterContext } from "./Router.context";

export interface RouteProps {
  path: string;
  children: any;
}

export function Route(props: RouteProps): JSX.Element {
  const ctx = useContext(RouterContext);
  return <>{ctx.url() === props.path && <>{props.children}</>}</>;
}
