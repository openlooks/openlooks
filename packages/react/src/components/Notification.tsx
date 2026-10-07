import React from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import { Button } from "./Button";
import { Loader } from "./Loader";
import { hideNotification } from "./NotificationsManager";
import { Text } from "./Text";
export interface NotificationProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
  slotIcon?: JSX.Element;
  loading?: boolean;
  title: string;
  message?: string;
  children?: JSX.Element;
  autoClose?: number | false;
  withCloseButton?: boolean;
  onClose?: () => void;
}
export function Notification(props: NotificationProps) {
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("notification", undefined)}
      style={props.sx as React.CSSProperties | undefined}
      data-autoClose={props.autoClose}
    >
      <>
        {props.slotIcon && (
          <div
            className={buildOpenLooksClassName("icon", props.c, {
              color: "blue",
            })}
          >
            {props.slotIcon}
          </div>
        )}
      </>
      <>
        {props.loading && (
          <div
            className={buildOpenLooksClassName("loading", props.c, {
              color: "blue",
            })}
          >
            <Loader />
          </div>
        )}
      </>
      <>
        {!props.slotIcon && !props.loading && (
          <div
            className={buildOpenLooksClassName("bar", props.c, {
              color: "blue",
            })}
          />
        )}
      </>
      <div className="content">
        <Text c="size-sm weight-500">{props.title}</Text>
        <Text c="size-sm color-gray">{props.children}</Text>
        <>
          {props.message && <Text c="size-sm color-gray">{props.message}</Text>}
        </>
      </div>
      <>
        {props.withCloseButton !== false && (
          <div className="close">
            <Button
              c="variant-subtle color-gray size-xs"
              onClick={() => {
                if (props.onClose) {
                  props.onClose();
                }
                if (props.id) {
                  hideNotification(props.id);
                }
              }}
            >
              ✕
            </Button>
          </div>
        )}
      </>
    </div>
  );
}
