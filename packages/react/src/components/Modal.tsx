import type { JSX } from "react";
import { useEffect } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";
import { CloseButton } from "./CloseButton";
import { Group } from "./Group";
import { Overlay } from "./Overlay";
import { Text } from "./Text";

export interface ModalProps extends BaseComponentProps {
  title?: string;
  width: string;
  visible?: boolean;
  onClose?: () => void;
}

export function Modal(props: ModalProps): JSX.Element {
  useEffect(() => {
    document.addEventListener("click", (event: MouseEvent) => {
      const classList = (event.target as HTMLElement | undefined)?.classList;
      if (
        classList?.contains("overlay") ||
        classList?.contains("modal-container")
      ) {
        props.onClose?.();
      }
    });
  }, []);
  return (
    <>
      <Overlay fixed visible={props.visible} />
      <div
        className={buildOpenLooksClassName("modal-container", undefined)}
        style={{
          visibility: props.visible ? "visible" : "hidden",
        }}
      >
        <div
          id={props.id}
          className={buildOpenLooksClassName("modal paper", props.c, {
            radius: "sm",
          })}
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
      </div>
    </>
  );
}
