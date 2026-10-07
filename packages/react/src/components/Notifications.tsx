import type { JSX } from "react";
import { useEffect, useState } from "react";
import { buildOpenLooksClassName } from "../utils/classname";
import type { BaseComponentProps } from "./BaseComponentProps";
import type { NotificationProps } from "./Notification";
import { Notification } from "./Notification";
import { subscribeNotifications } from "./NotificationsManager";

export interface NotificationsProps extends BaseComponentProps {}

export function Notifications(props: NotificationsProps): JSX.Element {
  const [currentNotifications, setCurrentNotifications] = useState(
    [] as NotificationProps[],
  );
  useEffect(() => {
    subscribeNotifications((newNotifications: NotificationProps[]) => {
      setCurrentNotifications(newNotifications);
    });
  }, []);
  return (
    <div
      id={props.id}
      className={buildOpenLooksClassName("notifications", props.c)}
      style={props.sx}
    >
      <>
        {currentNotifications.map((n) => (
          <Notification key={n.id} {...n}>
            {n.children}
          </Notification>
        ))}
      </>
    </div>
  );
}
