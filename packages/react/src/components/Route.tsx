import React from "react";
import Context from "./Router.context";
export interface RouteProps {
    path: string;
    children: any;
}
export default function Route(props: RouteProps) {
    const ctx = React.useContext(Context);
    return (<>{ctx.url() === props.path && <>{props.children}</>}</>);
}
