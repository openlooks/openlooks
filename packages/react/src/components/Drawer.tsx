import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import { CloseButton } from "./CloseButton";
import { Group } from "./Group";
import { Overlay } from "./Overlay";
import { Text } from "./Text";
export interface DrawerProps {
  id?: string;
  c?: string;
  title?: string;
  width: string;
  visible?: boolean;
  onClose?: () => void;
  children?: any;
}
export function Drawer(props: DrawerProps) {
  React.useEffect(() => {
    document.addEventListener("click", (event) => {
      if (
        (event.target as HTMLElement | undefined)?.classList.contains("overlay")
      ) {
        props.onClose?.();
      }
    });
  }, []);
  return (
    <>
      <Overlay fixed visible={props.visible} />
      <div
        id={props.id}
        className={buildOpenLooksClassName("drawer paper", props.c)}
        style={{
          width: props.width,
          opacity: props.visible ? "1" : "0",
          visibility: props.visible ? "visible" : "hidden",
          transform: props.visible
            ? "translateX(0)"
            : `translateX(-${props.width})`,
        }}
      >
        <Group c="position-apart pb-md">
          <Text c="fz-md">{props.title}</Text>
          <CloseButton onClick={() => props.onClose?.()} />
        </Group>
        {props.children}
      </div>
    </>
  );
}
