import { For, onMount, useStore } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { buildOpenLooksClassName } from '../utils/classname';
import type { NotificationProps } from './Notification.lite';
import Notification from './Notification.lite';
import { subscribeNotifications } from './NotificationsManager';

export interface NotificationsProps {
  id?: string;
  c?: string;
  sx?: Record<string, any>;
}

export default function Notifications(props: NotificationsProps) {
  const state = useStore({
    currentNotifications: [] as NotificationProps[],
  });

  onMount(() => {
    subscribeNotifications((newNotifications: NotificationProps[]) => {
      state.currentNotifications = newNotifications;
    });
  });

  return (
    <div
      id={props.id}
      class={buildOpenLooksClassName('notifications', props.c)}
      style={props.sx as JSX.CSS | undefined}
    >
      <For each={state.currentNotifications}>{(n) => <Notification {...n}>{n.children}</Notification>}</For>
    </div>
  );
}
