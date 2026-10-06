import React from "react";
import { buildOpenLooksClassName } from '../utils/classname';
import type { NotificationProps } from "./Notification";
import Notification from "./Notification";
import { subscribeNotifications } from './NotificationsManager';
export interface NotificationsProps {
    id?: string;
    c?: string;
    sx?: Record<string, any>;
}
export default function Notifications(props: NotificationsProps) {
    const [currentNotifications, setCurrentNotifications] = React.useState([] as NotificationProps[]);
    React.useEffect(() => {
        subscribeNotifications((newNotifications: NotificationProps[]) => {
            setCurrentNotifications(newNotifications);
        });
    }, []);
    return (<div id={props.id} className={buildOpenLooksClassName('notifications', props.c)} style={props.sx as React.CSSProperties | undefined}>
      <>{currentNotifications.map((n) => <Notification {...n}>{n.children}</Notification>)}</>
    </div>);
}
